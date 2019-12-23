import React from "react";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../Custom-Buttons/CustomButton.component";
import CustomLogin from "../CustomLogin-Button/CustomLogin-Button.component";

import "./SignUp.styles.scss";

export default class SignUp extends React.Component {
  state = {
    email: "",
    displayName: "",
    password: "",
    confirmPassword: "",
    user: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password, displayName } = this.state;

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      user.updateProfile({ displayName });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            handleChange={this.handleChange}
            value={this.state.displayName}
            label="Display Name"
            required
          />
          <FormInput
            type="text"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            handleChange={this.handleChange}
            value={this.state.confirmPassword}
            label="Confirm Password"
            required
          />
        </form>
        <CustomLogin choice={"Sign-up"} onClick={signInWithGoogle} />
        <CustomButton choice={"up"} onClick={this.handleSubmit} />
      </div>
    );
  }
}
