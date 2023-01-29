import { Navigate, Route, createBrowserRouter } from 'react-router-dom';
import {
  StudentAuthLayout,
  StudentLayout,
  StudentSettingsLayout,
} from '@/modules/layouts';

import {
  Error404,
  StudentLogin,
  StudentLogout,
  StudentProfile,
  StudentRegister,
  StudentSettings,
  StudentTest,
} from '@/modules/views';

export const router = createBrowserRouter([
  {
    path: 'student',
    children: [
      {
        element: <StudentAuthLayout />,
        children: [
          { path: 'login', element: <StudentLogin /> },
          { path: 'register', element: <StudentRegister /> },
          { path: 'logout', element: <StudentLogout /> },
        ],
      },
      {
        element: <StudentLayout />,
        children: [
          { path: 'test', element: <StudentTest /> },
          { path: 'profile/:username', element: <StudentProfile /> },
          {
            path: 'settings',
            element: <StudentSettingsLayout />,
            children: [{ path: ':type', element: <StudentSettings /> }],
          },
        ],
      },
    ],
  },
]);
