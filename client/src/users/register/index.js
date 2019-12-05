import React, { Component } from 'react'

class Register extends Component {
  render() {
    return (
      <div className="wrap-login100">
        <form className="login100-form validate-form flex-sb flex-w">
          <span className="login100-form-title">
            Register
          </span>
          <div className="p-t-25 p-b-9">
            <span className="txt1">
              First Name
            </span>
          </div>
          <div className="wrap-input100 validate-input" data-validate="Username is required">
            <input className="input100" type="text" name="firstname" />
            <span className="focus-input100" />
          </div>
          <div className="p-t-13 p-b-9">
            <span className="txt1">
              Last Name
            </span>
          </div>
          <div className="wrap-input100 validate-input" data-validate="Username is required">
            <input className="input100" type="text" name="lastname" />
            <span className="focus-input100" />
          </div>
          <div className="p-t-13 p-b-9">
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
          </div>
          <div className="wrap-input100 validate-input" data-validate="Password is required">
            <input className="input100" type="password" name="password" />
            <span className="focus-input100" />
          </div>
          <div className="container-login100-form-btn m-t-17">
            <button className="login100-form-btn">
              Register
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Register;
