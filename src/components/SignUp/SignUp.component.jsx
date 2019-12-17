import React from "react";

import FormInput from "../form-input/form-input.component";

import "./SignUp.styles.scss";
import CustomButton from "../Custom-Buttons/CustomButton.component";
import CustomLogin from "../CustomLogin-Button/CustomLogin-Button.component";

export default class SignUp extends React.Component {
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
        <CustomLogin choice={"Sign-up"} />
        <CustomButton choice={"up"} />
      </div>
    );
  }
}
