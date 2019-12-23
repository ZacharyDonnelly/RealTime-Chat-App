import React from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import Messages from "../Messages/Messages.component";
import Auth from "../Auth/Auth.component";

import "./Application.styles.scss";

class Application extends React.Component {
  state = {
    user: null
  };

  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      const user = await createUserProfileDocument(userAuth);
      console.log(user);
      this.setState({ user });
    });
  };
  componentWillUnmount = () => {
    document.body.style.background = "white";
  };
  render() {
    const { user } = this.state;
    return (
      <div className="main-bg">
        <Auth user={user} />
        <Messages {...user} />
      </div>
    );
  }
}
export default Application;
