import { withAuth } from '@/hoc/auth';
import {
  ArrowLeftOnRectangleIcon,
  BookmarkIcon,
  ClipboardDocumentCheckIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';
import { Link, Outlet } from 'react-router-dom';

const AdminMainLayout = withAuth(() => {
  return (
    <div className="min-h-screen flex">
      <div className="h-screen bg-white flex flex-col gap-5 border-r border-2 px-4 min-w-[280px]">
        <div className="px-2 py-4">
          <div className={'p-5 md:p-0'}>
            <h1 className="font-bold text-4xl">
              <Link to={'/'}>intype.</Link>
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 p-3 rounded-md font-semibold text-base cursor-pointer text-white hover:bg-sky-500 hover:text-white bg-sky-500">
            <Squares2X2Icon className="h-6 w-6" />
            <span>Dashboard</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-md font-semibold text-base cursor-pointer text-slate-600 hover:bg-sky-500 hover:text-white">
            <BookmarkIcon className="h-6 w-6" />
            <span>Kelola Kata</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-md font-semibold text-base cursor-pointer text-slate-600 hover:bg-sky-500 hover:text-white">
            <UserGroupIcon className="h-6 w-6" />
            <span>Pelajar</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-md font-semibold text-base cursor-pointer text-slate-600 hover:bg-sky-500 hover:text-white">
            <ClipboardDocumentCheckIcon className="h-6 w-6" />
            <span>Tes</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-md font-semibold text-base cursor-pointer text-slate-600 hover:bg-sky-500 hover:text-white">
            <ArrowLeftOnRectangleIcon className="h-6 w-6" />
            <span>Keluar</span>
          </div>
        </div>
        <div className="mt-auto border-t py-5 flex gap-4 items-center ">
          <div className="h-10 w-10 overflow-clip rounded-full">
            <img
              src="https://reqres.in/img/faces/7-image.jpg"
              alt="admin"
              className="h-full w-full"
            />
          </div>
          <div>
            <p className="font-semibold">Admin</p>
            <Link to={'/'} className="text-slate-500 text-sm underline">
              Pengaturan
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <div>
          <div className="max-w-6xl mx-auto p-4 pt-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
});

export default AdminMainLayout;
