import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function StudentLogout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [])

  if(loading) {
    return <div>Keluar dari aplikasi, tunggu sebentar...</div>;
  }

  return <Navigate to="/student/login" />;
}
