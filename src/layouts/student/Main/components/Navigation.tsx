import { Link } from 'react-router-dom';
import { Route } from '@/models/Route';
import {
  ABOUT,
  HOME,
  LEADERBOARD,
  PROFILE,
  SETTINGS_PROFILE_STUDENT,
  STUDENT_LOGOUT,
  TEST,
} from '@/constants';
import { ProfileMenu } from './ProfileMenu';
import { Menu } from './Menu';
import { useAuth } from '@/contexts/auth';

export default function Navigation() {
  const { user } = useAuth();
  const UserNavigationRoutes: Route[] = [TEST, LEADERBOARD];
  const ProfileNavigationRoutes: Route[] = [
    { ...PROFILE, path: `${PROFILE.path}/${user?.user.username}` },
    SETTINGS_PROFILE_STUDENT,
    STUDENT_LOGOUT,
  ];
  return (
    <nav className="max-w-7xl mx-auto py-3 flex justify-between">
      <div className="flex items-center gap-11">
        <Link to={HOME.path}>
          <h1 className='text-slate-800 text-4xl font-extrabold after:content-["."] after:text-sky-500'>
            intype
          </h1>
        </Link>
        <Menu routes={UserNavigationRoutes} />
      </div>
      <div>
        <ProfileMenu routes={ProfileNavigationRoutes} />
      </div>
    </nav>
  );
}
