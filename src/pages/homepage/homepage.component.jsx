import React from "react";
import "./homepage.styles.scss";

class HomePage extends React.Component {
  render() {
    return (
      <div className="main-home">
        <div className="homepage-image-container"></div>
        <div className="homepage-text">
          <h1 className="homepage-header">ChattR</h1>
        </div>
        <button
          className="homepage-btn"
          onClick={() => this.props.history.push("/signin")}>
          Go To Chat
        </button>
      </div>
    );
  }
}

export default HomePage;
