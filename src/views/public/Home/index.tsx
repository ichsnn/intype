/**
 * TODO: Create landing Page if user is not logged in
 *
 */

import { withoutAuth } from '@/hoc/auth';

const PublicHome = withoutAuth(() => {
  return <div>Landing Page</div>;
});

export default PublicHome;
