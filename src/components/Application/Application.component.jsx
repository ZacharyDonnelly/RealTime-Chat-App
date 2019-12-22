import React from "react";
import { auth } from "../../firebase/firebase.utils";

import Messages from "../Messages/Messages.component";
import Auth from "../Auth/Auth.component";

import "./Application.styles.scss";

class Application extends React.Component {
  state = {
    user: null
  };

  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ user });
    });
  };
  componentWillUnmount = () => {
    document.body.style.background = "white";
  };
  render() {
    return (
      <div className="main-bg">
        <Auth user={this.state.user} />
        <Messages />
      </div>
    );
  }
}
export default Application;
