import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";

import "./SignUp.styles.scss";

export default class SignUp extends Component {
  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <FormInput
          type="text"
          name="displayName"
          value="display name"
          label="Display Name"
          required
        />
        <FormInput
          type="text"
          name="email"
          value="email"
          label="Email"
          required
        />
        <FormInput
          type="text"
          name="password"
          value="password"
          label="Password"
          required
        />
        <FormInput
          type="text"
          name="confirmPassword"
          value="confirmPassword"
          label="Confirm Password"
          required
        />
      </div>
    );
  }
}
