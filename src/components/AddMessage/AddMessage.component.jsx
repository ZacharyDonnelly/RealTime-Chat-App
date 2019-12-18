import React from "react";
import { firestore } from "../../firebase/firebase.utils";

import "./AddMessage.styles.scss";

export default class AddMessage extends React.Component {
  state = {
    message: ""
  };

  handleChange = e => {
    const [name, value] = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { message } = this.state;

    const post = {
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
  };

  render() {
    const { message } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="AddPost">
        <input
          type="text"
          name="message"
          placeholder="Enter Message"
          value={message}
          onChange={this.handleChange}
        />
        <input className="create" type="submit" value="Create Post" />
      </form>
    );
  }
}
