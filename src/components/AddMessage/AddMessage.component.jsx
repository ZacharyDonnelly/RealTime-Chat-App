import React from "react";
import { firestore } from "../../firebase/firebase.utils";

import "./AddMessage.styles.scss";

export default class AddMessage extends React.Component {
  state = {
    message: "",
    user: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { message } = this.state;
    let post = {
      message,
      user: {
        uid: "1111",
        displayName: "Test User",
        email: "test@test.com"
      },
      createdAt: new Date()
    };
    firestore.collection("messages").add(post);

    this.setState({ message: "" });
    console.log(this.state.message);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="AddPost">
        <input
          type="text"
          name="message"
          placeholder="Enter Message"
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
        />
        <input className="create" type="submit" value="Create Message" />
      </form>
    );
  }
}
