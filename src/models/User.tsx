export type UserRole = 'admin' | 'student';
export type UserGender = '1' | '2';
export type UserEducation = '1' | '2' | '3' | '4' | '5' | '6' | '7';

export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  token: string;
  profile?: Profile;
}

export interface Profile {
  id: string;
  name: string;
  gender: UserGender;
  education: UserEducation;
}
