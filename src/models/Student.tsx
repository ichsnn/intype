import { User } from './User';

export interface Student {
  userUid: string;
  name: string;
  gender: string;
  education: '1' | '2' | '3' | '4' | '5' | '6' | '7';
  updatedAt: string;
  user: User;
}
