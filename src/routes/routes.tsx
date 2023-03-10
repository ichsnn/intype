import * as route from '@/constants/route';
import { UserRole } from '@/models/UserRole';

// Admin Routes / Page
const adminRoutes = [
  route.LOGIN_ADMIN,
  route.DASHBOARD_ADMIN,
  route.ADMIN_WORDS,
  route.ADMIN_TESTS,
  route.ADMIN_STUDENTS,
  route.ADMIN_LOGOUT,
];

// Student Routes / Page
const studentRoutes = [
  route.TEST,
  route.LOGIN_STUDENT,
  route.REGISTER_STUDENT,
  route.SETTINGS_PROFILE_STUDENT,
  route.PROFILE,
];

// Get Routes
export const routes = {
  admin: adminRoutes,
  student: studentRoutes,
};

export function getRoutes(role: UserRole) {
  return routes[role];
}
