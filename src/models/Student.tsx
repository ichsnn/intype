import { User } from "./User";

export interface Student {
  userUid: string;
  name: string;
  gender: string;
  education: string;
  updatedAt: string;
  user: User;
}
