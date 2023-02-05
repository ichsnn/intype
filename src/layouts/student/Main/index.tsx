import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import { withAuth } from '@/hoc/auth';

const StudentLayout = withAuth(() => {
  return (
    <Wrapper>
      <Header />
      <main className="py-10 px-4">
        <Outlet />
      </main>
      <Footer />
    </Wrapper>
  );
});

export default StudentLayout;
