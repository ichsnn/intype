import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Wrapper from './components/Wrapper';

export default function StudentSettingsLayout() {
  console.log('p');
  return (
    <Wrapper>
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </Wrapper>
  );
}
