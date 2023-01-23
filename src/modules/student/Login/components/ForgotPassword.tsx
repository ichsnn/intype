import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <Link
      to={'/forgot-password'}
      className="text-sky-500 underline font-bold text-sm"
    >
      Lupa password?
    </Link>
  );
}
