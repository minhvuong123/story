import React, { Component } from 'react';

import {
  NavLink
} from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="wrap-login100">
        <form className="login100-form validate-form flex-sb flex-w">
          <span className="login100-form-title p-b-25">
            Sign In
          </span>
          <a href="#" className="btn-face">
            <i className="fa fa-facebook-official" />
            Facebook
          </a>
          <a href="#" className="btn-google">
            <img src="assets/images/icons/icon-google.png" alt="GOOGLE" />
            Google
          </a>
          <div className="p-t-25 p-b-9">
            <span className="txt1">
              Email
            </span>
          </div>
          <div className="wrap-input100 validate-input" data-validate="Username is required">
            <input className="input100" type="text" name="email" />
            <span className="focus-input100" />
          </div>
          <div className="p-t-13 p-b-9">
            <span className="txt1">
              Password
            </span>
            {/* <a href="#" className="txt2 bo1 m-l-5">
              Forgot?
            </a> */}
          </div>
          <div className="wrap-input100 validate-input" data-validate="Password is required">
            <input className="input100" type="password" name="password" />
            <span className="focus-input100" />
          </div>
          <div className="container-login100-form-btn m-t-17">
            <button className="login100-form-btn">
              Sign In
            </button>
          </div>
          <div className="w-full text-center p-t-55">
            <span className="txt2">
              Not a member?
            </span>
            <NavLink to="/register" className="txt2 bo1 ml-3">
              Sign up now
            </NavLink>
          </div>
        </form>
      </div>
    )
  }
}
export default Login;
