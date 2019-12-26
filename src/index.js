import React from "react";
import "font-awesome/css/font-awesome.min.css";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MessagesProvider from "./providers/MessagesProvider";

import "./index.css";
import UserProvider from "./providers/UserProvider";
import HomePage from "./pages/homepage/homepage.component";
import NotFound from "./pages/NotFound/NotFound.component";
import SignInAndSignUp from "./pages/signin-and-signup/signin-and-signup.component";
import Application from "./components/Application/Application.component";

ReactDOM.render(
  <UserProvider>
    <MessagesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SignInAndSignUp} />
          <Route exact path="/chat" component={Application} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </MessagesProvider>
  </UserProvider>,
  document.getElementById("root")
);
