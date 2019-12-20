import React, { createContext } from "react";
import { firestore } from "../firebase/firebase.utils";
import { collectIdsAndDocs } from "../utils/utilities";

export const MessagesContext = createContext();

export default class MessagesProvider extends React.Component {
  state = { messages: [] };

  unsubscribeFromFirestore = null;

  componentDidMount = async () => {
    this.unsubscribeFromFirestore = firestore
      .collection("messages")
      .onSnapshot(snapshot => {
        const messages = snapshot.docs.map(collectIdsAndDocs);
        this.setState({
          messages
        });
      });
  };
  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
  };

  render() {
    const { messages } = this.state;
    const { children } = this.props;
    return (
      <MessagesContext.Provider value={messages}>
        {children}
      </MessagesContext.Provider>
    );
  }
}
