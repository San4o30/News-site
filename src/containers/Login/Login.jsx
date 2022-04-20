import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchUser } from "../../store/reducers/auth.reducer";

import "./Login.css";

function Login() {
  const [user, setUser] = useState({
    identifier: '',
    password: ''
  });

  const auth = useSelector(store => store.auth.user);


  const dispatch = useDispatch()

  const changeHandler = e => {
    setUser(user => {
      return {
        ...user,
        [e.target.name]: e.target.value
      }
    })
  }

  const submitHandler = e => {
    e.preventDefault();
    dispatch(fetchUser(user));
  }

  if (auth) {
    return <Navigate to='/' />
  }
  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <div className="input-group">
          <input 
            type="text" 
            name="identifier" 
            onChange={changeHandler} 
            required="Email"/>
            <label>Email</label>
        </div>
        <div className="input-group">
          <input 
            type="password" 
            name="password" 
            onChange={changeHandler} 
            required="password"/>
            <label>Password</label>
        </div>
        <input className="password-inp" type="submit" value="Login"/>
      </form>
    </div>
  );
}

export default Login;
