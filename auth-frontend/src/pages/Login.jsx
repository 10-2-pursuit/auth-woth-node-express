
import { LoginWrapper, LoginBackground, LoginHeader, LoginLabel, ErrorList, FormInput, LoginButton } from '../styles/loginElements';
import { useState, useEffect } from 'react';
import axios from 'axios';
const VITE_API_URL = import.meta.env.VITE_API_URL;
const Login = ({ setCurrentUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);
  
    const validatesEmail = () => {
  
      const emailErrors = [];
  
      if(!email.length){
        emailErrors.push('Email is required.');
        return emailErrors;
      }
  
      if (email.split(".").length !== 2 || email.split("@").length !== 2) {
        emailErrors.push(`Email must contain one '@' and one '.'`);
      }
      if (email.length < 5 || email.length > 150 ) {
        emailErrors.push('Email must be between 5 and 150 characters.');
      }
  
      return emailErrors;
    }
  
    const validatesPassword = () => {
  
      const passwordErrors = [];
      
      if (!password.length) {
        passwordErrors.push('Password is required.');
        return passwordErrors;
      }
  
      if (!/\d/.test(password)) {
        passwordErrors.push('Password must include at least one numeric character.');
      } 
      if (password.length < 8 || password.length > 150 || !/^[\x00-\x7F]*$/.test(password)) {
        passwordErrors.push('Password must be between 8 and 50 ASCII characters.');
      }
  
      return passwordErrors;
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      processRequest();
      console.log(email, password, " this is what we are sending")
      axios.post(`${VITE_API_URL}/users/login`, {
        email, 
        password
      })
        .then(res => {
          console.log(res, " response")
          setCurrentUser(res.data.user)

        })
        .catch(err => {
          console.error(err)
          // need to establish what errors that are fired back look like
          // setErrors([err])
        })
    //   await dispatch({type: actions.LOGIN});

    }
  
    const processRequest = () => {
      
     
    }
   
      return (
        <LoginWrapper>
          <LoginBackground onSubmit={handleSubmit}>
            <LoginLabel>
            <LoginHeader>Login to Your Account</LoginHeader>
            <ErrorList>
              <li>{errors.length ? 'Oops, there was an issue signing in:' : null}</li>
              {errors.length ? errors.map((error, i) => <li key={`error-${i}`}>&bull;&nbsp;{error}</li>): null}
            </ErrorList>
            </LoginLabel>
            <FormInput type="text" onChange={e => setEmail(e.currentTarget.value)} placeholder="Email"/>
            <FormInput type="password" onChange={e => setPassword(e.currentTarget.value)} placeholder="Password"/>
            <LoginButton >{'Sign In'}</LoginButton>
          </LoginBackground>
        </LoginWrapper>
    );
}

export default Login;
