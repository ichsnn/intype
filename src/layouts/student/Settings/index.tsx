import { Outlet, useNavigate, useParams } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Wrapper from './components/Wrapper';
import { useEffect } from 'react';

export default function StudentSettingsLayout() {
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    if (!params.type) navigate('/student/settings/profile', { replace: true });
  }, []);
  return (
    <Wrapper>
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </Wrapper>
  );
}
