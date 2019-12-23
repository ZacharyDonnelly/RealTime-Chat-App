import React from "react";

import Messages from "../Messages/Messages.component";
import Auth from "../Auth/Auth.component";

import "./Application.styles.scss";

class Application extends React.Component {
  componentWillUnmount = () => {
    document.body.style.background = "white";
  };
  render() {
    return (
      <div className="main-bg">
        <Auth />
        <Messages />
      </div>
    );
  }
}
export default Application;
