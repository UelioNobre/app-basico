import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../data/context/AuthContext';

import API from '../api';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorRequestApi, setErrorRequestApi] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const request = await API.Post('/auth', { email, password });
      
      login(request);
      navigate('/');
    } catch ({code, response}) {
      setErrorRequestApi(true);
      if (code === "ECONNABORTED") {
        setErrorMessage("Verifique sua conexão com a internet ou tente novamente mais tarde.");
      } else { 
        setErrorMessage(response.data.message);
      }
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      
      {errorRequestApi ? errorMessage : ''}

      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
          autoComplete="username"
          />
        
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Informe sua senha"
          autoComplete="current-password"
        />

        <button
          type='submit'>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
