import { UserRole } from "./UserRole";

export interface User {
  username: string;
  email: string;
  role: UserRole;
  email_verfiedAt: string;
  createdAt: string;
  updatedAt: string;
}
