import { withoutAuth } from '@/hoc/auth';
import { Outlet } from 'react-router-dom';

const AdminAuthLayout = withoutAuth(() => {
  return (
    <div className="min-h-screen bg-sky-400 flex">
      <Outlet />
    </div>
  );
});
export default AdminAuthLayout;
