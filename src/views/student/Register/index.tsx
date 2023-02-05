import { withoutAuth } from '@/hoc/auth';
import FormRegister from './components/FormRegister';
import Header from './components/Header';

const StudentRegister = () => {
  return (
    <div className="max-w-[700px] p-10 w-full">
      <Header />
      <FormRegister />
    </div>
  );
};

export default StudentRegister;
