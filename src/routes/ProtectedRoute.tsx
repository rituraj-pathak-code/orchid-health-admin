import { Navigate } from 'react-router-dom';
import { AuthService } from '../services/authServices';
import AdminContainer from '@/components/Containers/AdminContainer';

type ProtectedRouteProps = {
  element: React.ComponentType<unknown>;
};

const ProtectedRoute:React.FC<ProtectedRouteProps> = ({ element:Element }) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role')
  const isAuthenticated = AuthService.isAuthenticated(token,role)
  return isAuthenticated ? <AdminContainer><Element/></AdminContainer> : <Navigate to="/login" replace />;
};

export default ProtectedRoute