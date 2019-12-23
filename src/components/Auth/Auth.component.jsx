import React, { useContext } from "react";

import CurrentUser from "../CurrentUser/CurrentUser.component";
import SignInAndSignUp from "../../pages/signin-and-signup/signin-and-signup.component";
import { UserContext } from "../../providers/UserProvider";

const Auth = ({ loading }) => {
  const user = useContext(UserContext);

  if (loading) return null;

  return <div>{user ? <CurrentUser {...user} /> : <SignInAndSignUp />}</div>;
};

export default Auth;
