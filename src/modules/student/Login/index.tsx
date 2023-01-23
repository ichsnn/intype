import { Link } from 'react-router-dom';
import Container from './components/Container';
import FormLogin from './components/FormLogin';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { withoutAuth } from '@/hoc/auth';

const StudentLogin = withoutAuth(() => {
  return (
    <Container>
      <Sidebar />
      <main className="flex-1 flex flex-col text-slate-900">
        <Sidebar.Header className="block md:hidden" />
        <div className="flex h-full flex-col items-center justify-center">
          <div className="max-w-[700px] p-10 w-full">
            <Header />
            <FormLogin />
          </div>
        </div>
      </main>
    </Container>
  );
});

export default StudentLogin;
