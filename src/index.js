import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
