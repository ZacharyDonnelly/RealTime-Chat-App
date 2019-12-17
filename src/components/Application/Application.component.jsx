import React from "react";
import { signOut } from "../../firebase/firebase.utils";

import "./Application.styles.scss";

class Application extends React.Component {
  state = {
    user: null
  };
  handleClick = () => {
    signOut();
    return this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h2>filler</h2>
        <button onClick={this.handleClick}>Sign Out</button>
      </div>
    );
  }
}
export default Application;
