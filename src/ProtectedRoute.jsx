// ProtectedRoute.jsx
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './data/context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const {isAuthenticated} = useContext(AuthContext);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
