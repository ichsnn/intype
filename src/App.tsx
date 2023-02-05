import { RouterProvider } from 'react-router-dom';
import { AuthContext, AuthProvider } from './contexts/auth';
import { router } from './routes';

function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(value) => !value.loading && <RouterProvider router={router} />}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}

export default App;
