import { Link } from 'react-router-dom';
import { Route } from '@/models/Route';
import {
  ABOUT,
  HOME,
  LEADERBOARD,
  PROFILE,
  SETTINGS,
  STUDENT_LOGOUT,
  TEST,
} from '@/constants';
import { ProfileMenu } from './ProfileMenu';
import { Menu } from './Menu';

const UserNavigationRoutes: Route[] = [TEST, LEADERBOARD, ABOUT];
const ProfileNavigationRoutes: Route[] = [PROFILE, SETTINGS, STUDENT_LOGOUT];

export default function Navigation() {
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
