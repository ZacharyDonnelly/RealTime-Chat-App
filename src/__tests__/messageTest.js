import React from "react";
import ReactDOM from "react-dom";
import SignInAndSignUp from "../pages/signin-and-signup/signin-and-signup.component";

//Signup page testing
it("<SignInAndSignUp />", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SignInAndSignUp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
