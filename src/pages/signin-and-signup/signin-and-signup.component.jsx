import React from "react";
import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/SignUp/SignUp.component";

import "./signin-and-signup.styles.scss";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
