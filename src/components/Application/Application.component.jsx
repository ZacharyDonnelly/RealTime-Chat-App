import React from "react";
import { signOut } from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";
import { firestore } from "../../firebase/firebase.utils";
import { collectIdsAndDocs } from "../../firebase/firebase.utils";

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
    return this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h2>filler</h2>
        <Auth user={this.state.user} />
      </div>
    );
  }
}
export default Application;
