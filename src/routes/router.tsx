import { createBrowserRouter } from 'react-router-dom';
import { StudentAuthLayout, StudentLayout } from '@/modules/layouts';

import {
  StudentLogin,
  StudentLogout,
  StudentProfile,
  StudentRegister,
  StudentSettings,
  StudentTest,
} from '@/modules/views';

import StudentSettingsLayout from '@/modules/layouts/student/Settings';

export const router = createBrowserRouter([
  {
    path: 'student',
    element: <StudentAuthLayout />,
    children: [
      {
        path: 'login',
        element: <StudentLogin />,
      },
      {
        path: 'logout',
        element: <StudentLogout />,
      },
      {
        path: 'register',
        element: <StudentRegister />,
      },
    ],
  },
  {
    path: '/student/login',
    element: <StudentLogin />,
  },
  {
    path: '/student/logout',
    element: <StudentLogout />,
  },
  {
    path: '/student/register',
    element: <StudentRegister />,
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
      {
        path: 'settings',
        element: <StudentSettingsLayout />,
        children: [
          {
            path: ':type',
            element: <StudentSettings />,
          },
          {
            path: '*',
            element: <StudentSettings />,
          },
        ],
      },
    ],
  },
]);
