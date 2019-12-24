import React from "react";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../Custom-Buttons/CustomButton.component";
import CustomSignUp from "../CustomLogin-Button/CustomSignUp-button.component";

import "./SignUp.styles.scss";

export default class SignUp extends React.Component {
  state = {
    email: "",
    displayName: "",
    password: "",
    user: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password, displayName } = this.state;
    if (!email || !password || !displayName) {
      alert("Please fill in the form!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.error(error);
    }
    this.setState({ displayName: "", email: "", password: "" });
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
        </form>
        <CustomSignUp buttonClicked={this.handleSubmit} />
        <CustomButton choice={"up"} />
      </div>
    );
  }
}
