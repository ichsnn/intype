import { withAuth } from '@/hoc/auth';
import {
  ArrowLeftOnRectangleIcon,
  BookmarkIcon,
  ClipboardDocumentCheckIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import MenuItem from './components/Menu';

const AdminMainLayout = withAuth(() => {
  return (
    <div className="min-h-screen flex">
      <div className="h-screen bg-white flex flex-col gap-5 border-r border-2 px-4 min-w-[280px] sticky top-0">
        <div className="px-2 py-4">
          <div className={'p-5 md:p-0'}>
            <h1 className="font-bold text-4xl">
              <Link to={'/'}>intype<span className='text-sky-500'>.</span></Link>
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <MenuItem
            icon={<Squares2X2Icon className="h-6 w-6" />}
            label={'Dashboard'}
            to={'/admin/dashboard'}
          />
          <MenuItem
            icon={<BookmarkIcon className="h-6 w-6" />}
            label={'Kelola Kata'}
            to={'/admin/words'}
          />
          {/* <MenuItem
            icon={<UserGroupIcon className="h-6 w-6" />}
            label={'Pelajar'}
            to={'/admin/students'}
          />
          <MenuItem
            icon={<ClipboardDocumentCheckIcon className="h-6 w-6" />}
            label={'Tes'}
            to={'/admin/tests'}
          /> */}
          <MenuItem
            icon={<ArrowLeftOnRectangleIcon className="h-6 w-6" />}
            label={'Keluar'}
            to={'/admin/logout'}
          />
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
