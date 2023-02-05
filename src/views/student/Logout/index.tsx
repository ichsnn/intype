import { useAuth } from '@/contexts/auth';
import { withAuth } from '@/hoc/auth';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const StudentLogout = withAuth(() => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
  }, []);

  useEffect(() => {
    if (!user) {
      navigate('/student/login');
    }
  }, [user]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-2xl font-bold">Keluar dari akun...</div>
    </div>
  );
});

export default StudentLogout;
