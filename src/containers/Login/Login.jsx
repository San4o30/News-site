import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/reducers/auth.reducer";

import styles from "./Login.module.css";

function Login() {
  const [user, setUser] = useState({
    identifier: '',
    password: ''
  });

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

  return (
    <div className={styles.auth}>
      <form onSubmit={submitHandler}>
        <div className={styles.group}>
          <input
            className={styles.input}
            type="text"
            name="identifier"
            placeholder="Enter email"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.group}>
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.group}>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
