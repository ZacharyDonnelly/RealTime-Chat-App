import React from "react";
import { signOut } from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";
import { firestore } from "../../firebase/firebase.utils";
import { collectIdsAndDocs } from "../../utils/utilities";

import Messages from "../Messages/Messages.component";
import Auth from "../Auth/Auth.component";

import "./Application.styles.scss";
class Application extends React.Component {
  state = {
    messages: [],
    user: null
  };

  unsubscribeFromFirestore = null;
  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromFirestore = firestore
      .collection("messages")
      .onSnapshot(snapshot => {
        const messages = snapshot.docs.map(collectIdsAndDocs);
        this.setState({
          messages
        });
      });
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      console.log(user);
      this.setState({ user });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
  };

  handleClick = () => {
    signOut();
  };

  render() {
    return (
      <div>
        <Auth user={this.state.user} />
        <Messages messages={this.state.messages} />
      </div>
    );
  }
}
export default Application;
