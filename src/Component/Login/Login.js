import React, { useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';
import { GoogleAuthProvider,getAuth, signInWithPopup,signInWithEmailAndPassword } from "firebase/auth";
import './Login.css';
import google from '../../images/google.png';

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const Login = () => {
  const auth = getAuth();
  const handleGoogleSignIn=()=>{
    signInWithPopup(auth, googleProvider)
    .then(result=>{
      const user = result.user;
      console.log(user);
    })
  }
  const [email,setEmail]= useState();
  const [password,setPassword]= useState();
  const [error,setError]=useState('');

  const handleLogin=(e)=>{
    e.preventDefault();
    if(password && email === 'true'){
      setError('Successfully Login')
      return;
    }
    else{
      setError('');
    }
    signInWithEmailAndPassword(auth, email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    console.log(email,password);
  }
  const handleEmailChange=(e)=>{
    setEmail(e.target.value);
  }
  const handlePasswordChange=(e)=>{
    setPassword(e.target.value);
  }
    return (
        <div class="container">
         <form class="form-section" onSubmit={handleLogin}>
          <div class="form-div">
              <h1> Please Login</h1>
               <div class="row mb-3 input-div">
                  <label for="inputEmail3" class="col-sm-2 col-form-label text-large">Email</label>
                    <div class="col-sm-10">
                      <input onChange={handleEmailChange} type="email" class="form-control" id="inputEmail3" required/>
                    </div>
              </div>
               <div class="row mb-3 input-div">
                  <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                 <div class="col-sm-10">
                        <input onChange={handlePasswordChange} type="password" class="form-control" id="inputPassword3" required/>
                        <div class="text-danger">
                          {error}
                        </div>
                 </div>
              </div>
                 <button type="submit" class="btn btn-primary">Login</button>
                 <p>Please create a account? <a href='register.html'>Register</a></p>

                 <button class="google-box" onClick={handleGoogleSignIn}><img class="google" src={google} width="40px" hight="40px"/>
Google Sign IN </button>
           </div>
         </form>
        </div>
    );
};

export default Login;