import { Link, useMatch } from 'react-router-dom';
import cn from 'classnames'
import { Route } from '@/models/Route';

export default function Sidebar() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-4 items-center mb-6">
        <div className="h-10 w-10 overflow-clip rounded-full">
          <img
            src="https://reqres.in/img/faces/9-image.jpg"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="flex-1 font-bold text-xl">John Doe</h3>
      </div>
      <Menu />
    </div>
  );
}

function Menu() {
  const MenuItems = [
    {
      name: 'Profile',
      path: '/student/settings/profile',
    },
    {
      name: 'Password',
      path: '/student/settings/password',
    },
  ];
  return (
    <ul className="flex flex-col gap-1">
      {MenuItems.map((item) => (
        <MenuItem key={item.path} {...item} />
      ))}
    </ul>
  );
}

function MenuItem({ name, path }: Route) {
  const match = useMatch(path);
  return (
    <li>
      <Link to={path} className={cn("px-4 py-3 block text-slate-900 font-bold text-base rounded-full hover:bg-sky-100", {
        "bg-sky-100": match
      })}>
        {name}
      </Link>
    </li>
  );
}
