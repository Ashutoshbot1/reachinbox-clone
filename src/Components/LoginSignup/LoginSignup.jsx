import React, { useState } from "react";
import "./LoginSignup.scss";
import { FcGoogle } from "react-icons/fc";
import Button from "../Common/Button/Button";
import { Link, useNavigate } from "react-router-dom";

const loginObj = {
  heading: "Sign In",
  gText: "Sign in with Google",
  btnText: "Sign In",
  haveAccount: "Dont have an account?",
  span: "Sign Up",
};

const LoginSignup = () => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  //Function toggleSignMethod
  function toggleSignMethod() {
    setLogin((prev) => !prev);
  }



  //Function googleLogin
  function googleLogin(){
    const currentLocation=window.location.href;
    const redirectTo=currentLocation+'onebox';
    // console.log(currentLocation);
    window.location.href = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${redirectTo}`;
  }
  return (
    <div className="login-signup">
      <div className="header">
        <span className="logo">
          <img src="/Logo.png" alt="" />
        </span>
      </div>
      <div className="wrapper">
        <div className="form">
          <div className="top">
            <h2 className="heading">
              {!login ? "Create a new account" : loginObj.heading}
            </h2>
            <div className="googleBtn" onClick={googleLogin}>
              <span className="gIcon">
                <FcGoogle />
              </span>
              <span className="gText">
                {!login ? "Sign Up with Google" : loginObj.gText}
              </span>
            </div>
          </div>
          <div className="bottom">
            <Button text={!login ? "Create an Account" : loginObj.btnText} />
            <p className="haveAccount">
              {!login ? "Already have account?" : loginObj.haveAccount}{" "}
              <span onClick={toggleSignMethod}>
                {!login ? "Sign In" : loginObj.span}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
