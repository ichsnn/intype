import { useState, createContext, PropsWithChildren, useContext } from 'react';
import { IAuthContext } from './types';
import { User } from '@/models/User';
import { Route } from '@/models/Route';
import { getRoutes } from '@/routes';

export const AuthContext = createContext<IAuthContext>(null!);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [routes, setRoutes] = useState<Route[]>([]);

  function login(userData: User, callback?: VoidFunction) {
    setUser(userData);
    setRoutes(() => getRoutes(userData.role));
    callback?.();
  }

  function logout(callback: VoidFunction) {
    setUser(null);
    callback();
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, routes }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
