
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, currentUser, setCurrentUser }) => {
  return currentUser ? <Component currentUser={currentUser} setCurrentUser = {setCurrentUser}/> :<Navigate to="/login" />;
};

export default ProtectedRoute;
