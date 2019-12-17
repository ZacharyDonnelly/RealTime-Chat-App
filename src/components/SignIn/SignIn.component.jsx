import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../Custom-Buttons/CustomButton.component";
import CustomLogin from "../CustomLogin-Button/CustomLogin-Button.component";

export default class SignIn extends Component {
  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form>
          <FormInput
            name="email"
            type="email"
            label="email"
            value="temp"
            required
          />
          <FormInput
            name="password"
            type="password"
            value="temp"
            label="password"
            required
          />
        </form>
        <CustomLogin choice={"Sign-in"} />
        <CustomButton choice={"in"} />
      </div>
    );
  }
}
