import { BrowserRouter as Router, Route, Routes, Navigate }  from 'react-router-dom'
import { useState } from 'react';
import UserPortal from './pages/UserPortal';
import ProtectedRoute from './components/utils/ProtectedRoute';
import Login from './pages/Login';
import './App.css'
import SignUp from './pages/SignUp';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <>
     <Router >
        <Routes>
          <Route path='/login' element={ <Login /> } />
             <Route path="/" element ={ <Navigate to= "/login" /> }>
          </Route>
          <Route path='/signup' element={ <SignUp /> } />
          <Route path='/user' element={ <UserPortal /> } />
          <Route path="/users/:userId/profile" element={
              <ProtectedRoute 
                element={ <UserPortal /> } 
                currentUser = { currentUser }
              /> 
          }>
          </Route>
        </Routes>
      </Router>
    </>
  )
}
     
            
         


     
          
export default App
          
        


   

