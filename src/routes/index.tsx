import { createBrowserRouter } from 'react-router-dom';
import { UserRole } from '@/models/User';
import * as route from '@/constants';
import StudentLogin from '@/modules/student/Login';
import StudentTest from '@/modules/student/Test';
import StudentLayout from '@/layouts/student';
import StudentProfile from '@/modules/student/Profile';

const adminRoutes = [route.LOGIN_ADMIN, route.DASHBOARD_ADMIN];
const studentRoutes = [
  route.TEST,
  route.LOGIN_STUDENT,
  route.REGISTER_STUDENT,
  route.SETTINGS,
  route.PROFILE,
];

const routes = {
  admin: adminRoutes,
  student: studentRoutes,
};

export function getRoutes(role: UserRole) {
  return routes[role];
}

export const router = createBrowserRouter([
  {
    path: '/student/login',
    element: <StudentLogin />,
  },
  {
    path: 'student',
    element: <StudentLayout />,
    children: [
      {
        path: 'test',
        element: <StudentTest />,
      },
      {
        path: 'profile/:username',
        element: <StudentProfile />,
      },
    ],
  },
]);
