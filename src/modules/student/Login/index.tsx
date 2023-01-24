import FormLogin from './components/FormLogin';
import Header from './components/Header';
import { withoutAuth } from '@/hoc/auth';

const StudentLogin = withoutAuth(() => {
  return (
    <div className="max-w-[700px] p-10 w-full">
      <Header />
      <FormLogin />
    </div>
  );
});

export default StudentLogin;
