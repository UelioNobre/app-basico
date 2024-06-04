// routes.jsx
// import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

// AppRoutes.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired,
//   setIsAuthenticated: PropTypes.func.isRequired,
// };

export default AppRoutes;
