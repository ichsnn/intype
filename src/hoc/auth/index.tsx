import React, { ComponentProps, ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/auth';
import { DASHBOARD_ADMIN, LOGIN_STUDENT, TEST } from '@/constants';

export function withAuth(Component: ComponentType) {
  return function AuthComponent(props: ComponentProps<ComponentType>) {
    const { user } = useAuth();

    if (!user) return <Navigate to={LOGIN_STUDENT.path} replace />;

    return <Component {...props} />;
  };
}

export function withoutAuth(Component: ComponentType) {
  return function AuthComponent(props: ComponentProps<ComponentType>) {
    const { user } = useAuth();
    if (user?.user.role === 'admin')
      return <Navigate to={DASHBOARD_ADMIN.path} replace />;
    if (user?.user.role === 'student')
      return <Navigate to={TEST.path} replace />;

    return <Component {...props} />;
  };
}
