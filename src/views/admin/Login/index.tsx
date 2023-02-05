import { Link } from 'react-router-dom';
import FormLogin from './components/FormLogin';

export default function AdminLogin() {
  return (
    <div className="bg-white self-center mx-auto p-10 rounded-2xl max-w-md w-full shadow-md">
      <div className="mb-6">
        <h2 className="font-bold text-2xl mb-2 text-center">
          Masuk Sebagai Admin
        </h2>
        <p className="text-center">
          Kembali ke{' '}
          <span className="underline font-bold text-sky-500">
            <Link to={'/'}>Halaman Utama</Link>
          </span>
        </p>
      </div>
      <div>
        <FormLogin />
      </div>
    </div>
  );
}
