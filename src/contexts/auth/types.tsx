import { Admin } from '@/models/Admin';
import { Route } from '@/models/Route';
import { Student } from '@/models/Student';
import { User } from '@/models/User';

export interface IAuthContext {
  user: Student | Admin | null;
  login: (userData: Student | Admin, callback?: VoidFunction) => void;
  logout: (callback?: VoidFunction) => void;
  routes: Route[];
  loading: boolean;
  update: (userData: Student | Admin, callback?: VoidFunction) => void;
}
