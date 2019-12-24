import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import CustomButton from "../Custom-Buttons/CustomButton.component";
import CustomLogin from "../CustomLogin-Button/CustomLogin-Button.component";

import "./SignIn.styles.scss";

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
    displayName: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleClicked = async () => {
    const { email, password } = this.state;
    await auth.signInWithEmailAndPassword(email, password);
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleClicked}>
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
        <CustomLogin choice={"Sign-in"} getClicked={this.handleClicked} />
        <CustomButton choice={"in"} onClick={signInWithGoogle} />
      </div>
    );
  }
}
