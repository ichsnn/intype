import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Route } from '@/models/Route';

export function ProfileMenu({ routes }: { routes: Route[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  // close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isOutside = !target.closest('#profile');
      if (isOutside) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  // close dropdown when pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="relative" id="profile">
      <div
        className={cn('h-10 w-10 rounded-full overflow-clip cursor-pointer', {
          'ring-2': isOpen,
        })}
        onClick={handleClick}
      >
        <img
          src="https://reqres.in/img/faces/9-image.jpg"
          alt="profile"
          className="object-cover w-full"
        />
      </div>
      {isOpen && <ProfileMenuDropdown routes={routes} onClick={handleClick} />}
    </div>
  );
}

export function ProfileMenuDropdown({
  routes,
  onClick,
}: {
  routes: Route[];
  onClick: () => void;
}) {
  return (
    <div className="absolute top-full translate-y-2 right-0 bg-white border rounded-lg divide-y min-w-[200px] z-50">
      <ul className="py-2 shadow-md">
        {routes.map((route) => (
          <ProfileMenuItem
            key={route.path}
            {...route}
            onClick={onClick}
          />
        ))}
      </ul>
    </div>
  );
}

export function ProfileMenuItem({
  path,
  name,
  onClick,
}: Route & { onClick: () => void }) {
  return (
    <li className="text-slate-900 font-medium hover:bg-sky-100 active:bg-sky-100">
      <Link to={path} className="w-full block px-4 py-2" onClick={onClick}>
        {name}
      </Link>
    </li>
  );
}
