import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold mb-2">Buat Akunmu Sekarang!</h1>
      <p className="font-medium text-base">
        Sudah Punya Akun?{' '}
        <Link to={'/student/login'} className="text-sky-500 underline font-bold">
          Masuk
        </Link>
      </p>
    </div>
  );
}
