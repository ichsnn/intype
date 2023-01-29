import { useParams, Navigate } from 'react-router-dom';
import StudentSettingsProfile from './components/Profile';
import StudentSettingsPassword from './components/Password';

const StudentSettings = () => {
  const { type } = useParams();
  console.log(type)
  if (type === 'profile') {
    return <StudentSettingsProfile />;
  }
  if (type === 'password') {
    return <StudentSettingsPassword />;
  }
  return <Navigate to="/student/settings/profile" replace />;
};

export default StudentSettings;
