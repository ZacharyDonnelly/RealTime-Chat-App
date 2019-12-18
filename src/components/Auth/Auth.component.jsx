import React from "react";

import CurrentUser from "../CurrentUser/CurrentUser.component";
import SignInAndSignUp from "../../pages/signin-and-signup/signin-and-signup.component";

const Auth = ({ user, loading }) => {
  if (loading) return null;

  return <div>{user ? <CurrentUser {...user} /> : <SignInAndSignUp />}</div>;
};

export default Auth;
