
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, currentUser }) => {
  return currentUser ? <Component /> :<Navigate to="/" />;
};

export default ProtectedRoute;
