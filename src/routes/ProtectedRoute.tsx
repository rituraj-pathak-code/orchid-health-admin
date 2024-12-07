import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, roles, userRole }) => {
  console.log({userRole})
  return roles.includes(userRole) ? element : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute