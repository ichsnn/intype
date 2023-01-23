import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/auth';
import { router } from './routes';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
