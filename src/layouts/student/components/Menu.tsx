import { Link, useMatch } from 'react-router-dom';
import cn from 'classnames';
import { Route } from '@/models/Route';

export function Menu({ routes }: { routes: Route[] }) {
  return (
    <ul className="flex">
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
          'font-semibold text-base text-slate-900 px-5 py-2 rounded-full',
          {
            'bg-sky-200': match,
          }
        )}
        to={path}
      >
        {name}
      </Link>
    </li>
  );
}
