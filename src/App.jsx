import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import useAuth from './data/hooks/useAuth';
import { AuthProvider } from './data/context/AuthContext';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useAuth();

  return (
    <Router>
      <AuthProvider>
        <AppRoutes isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      </AuthProvider>
    </Router>
  );
}

export default App
