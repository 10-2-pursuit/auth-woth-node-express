import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import UserPortal from "./pages/UserPortal";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import Login from "./pages/Login";
import "./App.css";
import SignUp from "./pages/SignUp";
import PublicRoute from "./components/utils/PublicRoute";
import { Reset } from 'styled-reset'
function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <>
    <Reset />
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute
                element={Login}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route path="/" element={<Navigate to="/login" />}></Route>

          <Route
            path="/signup"
            element={
              <PublicRoute
                element={SignUp}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/users/:userId/profile"
            element={
              <ProtectedRoute
                element={UserPortal}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
