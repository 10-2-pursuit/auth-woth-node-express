import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import "./App.css";
import { Reset } from 'styled-reset'
// import UserPortal from "./pages/UserPortal";
// import PublicRoute from "./components/utils/PublicRoute";
function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <>
    <Reset />
      <Router>
        <Routes>
          {/* PUBLIC ROUTE FOR LOGIN */}
          <Route path="/" element={<Login/>} />
          {/* PUBLIC ROUTE SIGNUP */}
          <Route path="/signup" element={<SignUp/>} />
          {/* ROUTE FOR "/" WITH REDIRECT TO LOGIN ROUTE */}
          <Route path="/login" element={<ProtectedRoute/>} />
          {/* ROUTE TO USER PROFILE ROUTE WITH WILDCARD MATCHER */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
