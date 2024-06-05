import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem('isAuthenticated') || false;
    return storedAuth ? JSON.parse(storedAuth) : false;
  });

  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem('isAuthenticated', JSON.stringify(false))
    localStorage.removeItem('data');
  };
  
  const login = (payload = null) => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', JSON.stringify(true))
    localStorage.setItem('data', JSON.stringify(payload))
  }

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    logout,
    login
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};


AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};