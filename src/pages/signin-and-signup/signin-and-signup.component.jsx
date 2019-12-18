import React, { Component } from "react";
import { auth } from "../../firebase/firebase.utils";
import { Redirect } from "react-router-dom";

import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/SignUp/SignUp.component";

import "./signin-and-signup.styles.scss";

export default class SignInAndSignUp extends Component {
  state = {
    user: null
  };
  componentDidMount = async () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ user });
    });
  };
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { user } = this.state;
    if (user) {
      return <Redirect to="/chat" />;
    }
    return (
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>
    );
  }
}
