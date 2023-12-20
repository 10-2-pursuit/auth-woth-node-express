import React from 'react';
import { Navigate, Route } from 'react-router-dom';


const ProtectedRoute = ({ element: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component currentUser={currentUser} setCurrentUser={setCurrentUser} {...props} />
      ) : (
        <Navigate to="/login" />
      )
    }
  />
);

export default ProtectedRoute;
