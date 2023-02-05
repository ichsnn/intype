import { useAuth } from '@/contexts/auth';
import { withAuth } from '@/hoc/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogout = withAuth(() => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
  }, []);

  useEffect(() => {
    if (!user) {
      navigate('/admin/login');
    }
  }, [user]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-2xl font-bold">Keluar dari akun...</div>
    </div>
  );
});

export default AdminLogout;
