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
          {/* PUBLIC ROUTE FOR LOGIN */}
          <Route path="/login" element={<Login/>}/>
          {/* PUBLIC ROUTE SIGNUP */}
          <Route path='/signup' element={<SignUp/>}/>
          {/* ROUTE FOR "/" WITH REDIRECT TO LOGIN ROUTE */}
          <Route path="/" element={<ProtectedRoute/>}/>
          {/* ROUTE TO USER PROFILE ROUTE WITH WILDCARD MATCHER */}
          <Route path='/profile/*' element={<PublicRoute/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
