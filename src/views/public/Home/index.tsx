/**
 * TODO: Create landing Page if user is not logged in
 *
 */

import { withoutAuth } from '@/hoc/auth';
import { Navigate } from 'react-router-dom';

const PublicHome = withoutAuth(() => {
  return <Navigate to="/student/login" />;
});

export default PublicHome;
