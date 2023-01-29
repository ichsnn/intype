import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold mb-2">Masuk Ke Akunmu</h1>
      <p className="font-medium text-base">
        Belum Punya Akun?{' '}
        <Link to={'/student/register'} className="text-sky-500 underline font-bold">
          Daftar
        </Link>
      </p>
    </div>
  );
}
