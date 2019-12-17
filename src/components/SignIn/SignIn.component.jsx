import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../Custom-Buttons/CustomButton.component";
import CustomLogin from "../CustomLogin-Button/CustomLogin-Button.component";

import "./SignIn.styles.scss";

export default class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form>
          <FormInput
            name="email"
            type="email"
            label="Email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />
        </form>
        <CustomLogin choice={"Sign-in"} onClick={signInWithGoogle} />
        <CustomButton choice={"in"} />
      </div>
    );
  }
}
