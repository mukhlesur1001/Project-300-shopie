import React, { useState } from 'react';
import './Login.css';
import {getAuth,createUserWithEmailAndPassword } from "firebase/auth";
const Register = () => {
  const [email,setEmail]= useState();
  const [password,setPassword]= useState();
  const [error,setError]=useState('');
  const auth = getAuth();

  const handleRegistration=(e)=>{
    e.preventDefault();
    if(password.length<6){
      setError('Password Must be at least 6 characters')
      return;
    }
    else{
      setError('');
    }
    createUserWithEmailAndPassword(auth, email, password)
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
         <form class="form-section" onSubmit={handleRegistration}>
          <div class="form-div">
              <h1> Please Create Account</h1>
               <div class="row mb-3 input-div">
                  <label for="inputEmail3" class="col-sm-2 col-form-label text-large">Email</label>
                    <div class="col-sm-10">
                      <input onBlur={handleEmailChange} type="email" class="form-control" id="" required/>
                    </div>
              </div>
               <div class="row mb-3 input-div">
                  <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                 <div class="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" class="form-control" id="" required/>
                        <div class="text-danger">
                          {error}
                        </div>
                 </div>
              </div>
                 <button  type="submit" class="btn btn-primary">Register</button>
                 <p>Already have a account please? <a href='login.html'>Login</a></p>
           </div>
         </form>
        </div>
    );
};

export default Register;