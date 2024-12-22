import { Navigate } from 'react-router-dom';
import { AuthService } from '../services/authServices';

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role')
  const isAuthenticated = AuthService.isAuthenticated(token,role)
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute