import {
  useState,
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
} from 'react';
import { IAuthContext } from './types';
import { Route } from '@/models/Route';
import { getRoutes } from '@/routes';
import { Student } from '@/models/Student';
import { Admin } from '@/models/Admin';
import { apiGet } from '@/service/api';

export const AuthContext = createContext<IAuthContext>(null!);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<Student | Admin | null>(null);
  const [routes, setRoutes] = useState<Route[]>([]);

  function login(userData: Student | Admin, callback?: VoidFunction) {
    setUser(userData);
    setRoutes(() => getRoutes(userData.user.role));
    callback?.();
  }

  function logout(callback?: VoidFunction) {
    setUser(null);
    setRoutes([]);
    localStorage.removeItem('access_token');
    callback?.();
  }

  const handleFirstVisit = async () => {
    const access_token = localStorage.getItem('access_token');
    if (!access_token) return;
    const response = await apiGet('/student/me', { token: access_token }).catch(
      (error) => {
        console.log(error);
        localStorage.removeItem('access_token');
      }
    );
    setUser(response.data);
  };

  useEffect(() => {
    handleFirstVisit();
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, routes, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
