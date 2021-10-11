import React, { useRef, useState } from "react";
import "./AuthForm.css";

function AuthForm(props) {
  const [isLogin, setIsLogin] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevstate) => !prevstate);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (
      !enteredEmail.includes("@" && ".") &&
      enteredPassword.trim().length <= 6
    ) {
      return;
    } else {
      let url;
      if (isLogin) {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAbTfm0AJWITAB5k6D1vZqaCrV52zrzLok";
      } else {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAbTfm0AJWITAB5k6D1vZqaCrV52zrzLok";
      }

      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.ok) {
          res.json();
          props.onValue(setIsLogin(true));
        } else {
          return res.json().then((data) => {
            alert(data.error.message);
          });
        }
      });
    }
  };

  return (
    <div className="auth">
      <h1>{isLogin ? "Login" : "SignUp"}</h1>
      <form onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            ref={emailInputRef}
            autocomplete="off"
          />
        </div>
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordInputRef}
            autocomplete="off"
          />
        </div>
        <div className="actions">
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className="toggle"
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
