import { Outlet, useRoutes } from 'react-router-dom';
import Container from './components/Container';
import Sidebar from './components/Sidebar';
import { withoutAuth } from '@/hoc/auth';

const StudentAuthLayout = withoutAuth(() => {
  return (
    <Container>
      <Sidebar />
      <main className="flex-1 flex flex-col text-slate-900">
        <Sidebar.Header className="block md:hidden" />
        <div className="flex h-full flex-col items-center justify-center">
          <Outlet />
        </div>
      </main>
    </Container>
  );
});

export default StudentAuthLayout;
