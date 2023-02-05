import cn from 'classnames';
import { useMatch, useNavigate } from 'react-router-dom';

export default function MenuItem({
  icon,
  label,
  to,
}: {
  icon: JSX.Element;
  label: string;
  to: string;
}) {
  const navigate = useNavigate();
  const match = useMatch(to);
  return (
    <div
      className={cn(
        'flex items-center gap-3 p-3 rounded-md font-semibold text-base cursor-pointer hover:bg-sky-500 hover:text-white ',
        {
          'bg-sky-500 text-white': match,
          'text-slate-600': !match,
        }
      )}
      onClick={() => navigate(to)}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}
