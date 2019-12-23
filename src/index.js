import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MessagesProvider from "./providers/MessagesProvider";

import "./index.css";
import App from "./App";
import UserProvider from "./providers/UserProvider";

render(
  <UserProvider>
    <MessagesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MessagesProvider>
  </UserProvider>,
  document.getElementById("root")
);
