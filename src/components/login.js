import React, { useEffect } from "react";
//import { Fragment } from "react";
import Auth from '../constants/auth';

const auth = new Auth();
const Login = (props) => {
  const  loginHandle  =  async () => {
  await  auth.login();
  props.setLoginState()
  }
  useEffect( () => {
    window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
            client_id: process.env.REACT_APP_CLIENT_ID
        }).then(() => (error) => {
          console.log(error)
         }) 
        }) 
  })
    return (
      
      <div>
        <button onClick={loginHandle}>Login</button>
      </div> 
    );
  
}

export default Login;