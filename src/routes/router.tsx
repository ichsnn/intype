import { Navigate, Route, createBrowserRouter } from 'react-router-dom';
import {
  StudentAuthLayout,
  StudentLayout,
  StudentSettingsLayout,
} from '@/layouts';

import {
  Error404,
  PublicHome,
  StudentComposeGrammar,
  StudentLogin,
  StudentLogout,
  StudentProfile,
  StudentRegister,
  StudentSettings,
  StudentTest,
} from '@/views';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicHome />,
  },
  {
    element: <StudentAuthLayout />,
    children: [
      { path: 'student/login', element: <StudentLogin /> },
      { path: 'student/register', element: <StudentRegister /> },
      { path: 'student/logout', element: <StudentLogout /> },
    ],
  },
  {
    element: <StudentLayout />,
    children: [
      { path: 'student/test', element: <StudentTest /> },
      { path: 'student/profile/:username', element: <StudentProfile /> },
      {
        path: 'student/settings',
        element: <StudentSettingsLayout />,
        children: [{ path: ':type', element: <StudentSettings /> }],
      },
    ],
  },
  { path: '/student/test/composegrammar', element: <StudentComposeGrammar /> },
]);
