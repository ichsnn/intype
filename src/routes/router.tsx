import { createBrowserRouter } from 'react-router-dom';
import {
  StudentAuthLayout,
  StudentLayout,
  StudentSettingsLayout,
} from '@/layouts';

import {
  Error404,
  PublicHome,
  StudentLogin,
  StudentLogout,
  StudentProfile,
  StudentRegister,
  StudentSettings,
  StudentTest,
  StudentComposeGrammar,
  StudentListenTyping,
  StudentLeaderboard,
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
      {
        path: 'student/leaderboard',
        element: <StudentLeaderboard />,
      },
    ],
  },
  { path: '/student/test/composegrammar', element: <StudentComposeGrammar /> },
  { path: '/student/test/listentyping', element: <StudentListenTyping /> },
  { path: 'student/logout', element: <StudentLogout /> },
]);
