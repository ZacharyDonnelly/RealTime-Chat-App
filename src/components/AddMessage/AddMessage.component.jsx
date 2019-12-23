import React from "react";
import { firestore } from "../../firebase/firebase.utils";

import { styleFunc, inputHelper } from "../../utils/utilities";

import "./AddMessage.styles.scss";

export default class AddMessage extends React.Component {
  state = {
    message: "",
    user: ""
  };

  componentDidMount = () => {
    this.setState({
      user: {
        displayName: this.props.displayName,
        uid: this.props.uid,
        email: this.props.email
      }
    });
  };
  handleSubmit = async e => {
    e.preventDefault();
    if (!this.state.message) {
      alert("Please enter a message!");
    } else {
      const { message } = this.state;
      let post = {
        message,
        user: {
          displayName: this.props.displayName,
          uid: this.props.uid,
          email: this.props.email
        },
        createdAt: new Date()
      };
      firestore.collection("messages").add(post);

      this.setState({ message: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="AddPost">
        <input
          style={styleFunc(this.state.message)}
          className="add-message"
          type="text"
          name="message"
          placeholder="Enter Message"
          value={inputHelper(this.state.message)}
          onChange={e => this.setState({ message: e.target.value })}
        />
      </form>
    );
  }
}
