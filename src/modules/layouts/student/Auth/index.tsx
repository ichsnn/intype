import { Outlet } from 'react-router-dom';
import Container from './components/Container';
import Sidebar from './components/Sidebar';

export default function StudentAuthLayout() {
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
}
