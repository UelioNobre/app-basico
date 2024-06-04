import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../data/context/AuthContext';

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log(isAuthenticated);
    setIsAuthenticated(true);
    navigate('/');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
