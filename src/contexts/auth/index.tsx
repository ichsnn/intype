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
import jwt_decode from 'jwt-decode';

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

  function update(userData: Student | Admin, callback?: VoidFunction) {
    setUser(userData);
    callback?.();
  }

  const handleFirstVisit = async () => {
    const access_token = localStorage.getItem('access_token') as string;
    if (!access_token) return;
    const payload = jwt_decode(access_token);
    const { role } = payload as any;
    if (!access_token) return;
    let path = '';
    if (role === 'admin') {
      path = '/admin/me';
    } else if (role === 'student') {
      path = '/student/me';
    }
    const response = await apiGet(path, { token: access_token }).catch(
      (error) => {
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
    <AuthContext.Provider
      value={{ user, login, logout, routes, loading, update }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
