import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginWrapper, LoginBackground, LoginHeader, LoginLabel, ErrorList, FormInput, LoginButton } from '../../../styles/loginElements';


const API_URL = import.meta.env.VITE_API_URL;
const AuthForm = ({ authFormType }) => {
    const navigate = useNavigate();

    const [errors, setErrors] = useState([])
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirm: ''
    })


    const validatesEmail = (email = userData.email) => {
  
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
    
    const validatesPassword = (password = userData.password, match = userData.confirm) => {

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
    if(password != match) {
        passwordErrors.push('Passwords need to match.')
    }

    return passwordErrors;
    }

    const validatesName = (name, type) => {
        const nameErrors = []
        if(!name.length){
            nameErrors.push(`A ${type} name is required.`)
        }
        if(name.length > 255) {
            nameErrors.push(`The ${type} name exceeds 255 characters`)
        }
        return nameErrors
    }

    const processRequest = () => {
        let newErrors = [
            ...(validatesEmail()), 
            ...(validatesPassword()), 
            ...(validatesName(userData.firstName,'first')),
            ...(validatesName(userData.lastName,'last'))
        ]
        if(newErrors.length > 0){
            setErrors(newErrors)
            return false
        } else {
            setErrors([])
            return true
        }
      }
   
    const handleFormAuth = (event) => {
        event.preventDefault()
        // console.log(userData)
        if(processRequest()){
            handleSignUp(event)
        } else {

        }
    } 
  
    const handleSignUp = async (event) => {
        const user = event;
        // console.log(user)
        try {
          await axios.post(API_URL, user);
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <LoginWrapper>
            <LoginBackground onSubmit={handleFormAuth}>
                <LoginLabel>
                    <LoginHeader>Sign Up</LoginHeader>
                    <ErrorList>
                    <li>{errors.length ? 'Oops, there was an issue signing in:' : null}</li>
                        {errors.length ? errors.map((error, i) => <li key={`error-${i}`}>&bull;&nbsp;{error}</li>): null}
                    </ErrorList>
                </LoginLabel>
                <FormInput type='text' id='firstName' onChange={e => setUserData({...userData, [e.target.id]: e.currentTarget.value})} placeholder='First Name'/>
                <FormInput type='text' id='lastName' onChange={e => setUserData({...userData, [e.target.id]: e.currentTarget.value})} placeholder='Last Name'/>
                <FormInput type='text' id='email' onChange={e => setUserData({...userData, [e.target.id]: e.currentTarget.value})} placeholder='Email'/>
                <FormInput type='password' id='password' onChange={e => setUserData({...userData, [e.target.id]: e.currentTarget.value})} placeholder='Password'/>
                <FormInput type='password' id='confirm' onChange={e => setUserData({...userData, [e.target.id]: e.currentTarget.value})} placeholder='Confirm password'/>



                    {/* <label htmlFor="" id='firstname'>
                        First Name
                        <input type='text'/>
                    </label>
                    <label htmlFor="">
                        Last Name
                        <input type='text'/>
                    </label>
                    <label htmlFor="">
                        Email
                        <input type='text'/>
                    </label>
                    <label htmlFor="">
                        Password
                        <input type='text'/>
                    </label>
                    <label htmlFor="">
                        Confirm Password
                        <input type='text'/>
                    </label> */}
                    <button type="submit">Submit</button>
            </LoginBackground>
        </LoginWrapper>
        
    );
}

export default AuthForm;
