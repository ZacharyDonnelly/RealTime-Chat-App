import React from "react";
import ReactDOM from "react-dom";
import HomePage from "../pages/homepage/homepage.component";

//Homepage Testing
it("<HomePage />", () => {
  const div = document.createElement("div");
  ReactDOM.render(<HomePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
