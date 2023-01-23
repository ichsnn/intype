import { Link } from 'react-router-dom';
import cn from 'classnames';

export default function Sidebar() {
  return (
    <div className="w-2/6 max-w-[400px] bg-gradient-to-b from-sky-500 via-sky-500 to-sky-300 text-white p-8 hidden md:flex flex-col gap-3">
      <Sidebar.Header className="hidden md:block" />
      <section className="flex items-center h-full w-full">
        <div>
          <h2 className="mb-4 text-2xl font-bold">
            Tes Kemampuan Kosa Kata Bahasa Inggris
          </h2>
          <p className="text-base font-medium">
            Tingkatkan kemampuanmu dengan tes digital interaktif bersama{' '}
            <span className="font-bold">intype</span>
          </p>
        </div>
      </section>
    </div>
  );
}

interface HeaderProps {
  className?: string;
}
Sidebar.Header = ({ className }: HeaderProps) => {
  return (
    <div className={cn('p-5 md:p-0', className)}>
      <h1 className="font-bold text-4xl">
        <Link to={'/'}>intype.</Link>
      </h1>
    </div>
  );
};
