import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '@/context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.func,
};

export default ProtectedRoute;
