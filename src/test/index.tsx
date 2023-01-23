import { User } from '@/models/User';

const AdminCredentials = {
  email: 'admin@mail.com',
  password: 'admin1234',
};

const StudentCredentialsEmail = {
  email: 'ichsan@mail.com',
  password: 'password',
};

const StudentCredentialsUsername = {
  username: 'ichsan',
  password: 'password',
};

interface IUserData {
  [key: string]: User;
}
export const UserData: IUserData = {
  student: {
    id: '1',
    username: 'ichsan',
    email: 'ichsan@mail.com',
    role: 'student',
    token: 'thisisatoken',
  },
  admin: {
    id: '2',
    username: 'admin',
    email: 'admin@intype.com',
    role: 'admin',
    token: 'thisistooken',
  },
};
