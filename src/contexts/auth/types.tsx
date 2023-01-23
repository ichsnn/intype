import { Route } from '@/models/Route';
import { User } from '@/models/User';

export interface IAuthContext {
  user: User | null;
  login: (userData: User, callback?: VoidFunction) => void;
  logout: (callback: VoidFunction) => void;
  routes: Route[];
}
