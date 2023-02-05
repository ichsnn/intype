import { Link, useMatch } from 'react-router-dom';
import cn from 'classnames';
import { Route } from '@/models/Route';

export function Menu({ routes }: { routes: Route[] }) {
  return (
    <ul className="flex gap-2">
      {routes.map((route) => (
        <MenuItem key={route.path} {...route} />
      ))}
    </ul>
  );
}

export function MenuItem({ path, name }: Route) {
  const match = useMatch(path);
  return (
    <li>
      <Link
        className={cn(
          'font-semibold text-base text-slate-900 px-5 py-2 rounded-full block hover:bg-sky-100',
          {
            'bg-sky-100': match,
          }
        )}
        to={path}
      >
        {name}
      </Link>
    </li>
  );
}
