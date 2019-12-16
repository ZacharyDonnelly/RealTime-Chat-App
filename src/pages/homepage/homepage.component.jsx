import React from "react";
import { Redirect } from "react-router-dom";
import "./homepage.styles.scss";

class HomePage extends React.Component {
  componentDidMount() {
    document.body.style.overflow = "hidden";
  }

  componentDidUnMount() {
    document.body.style.overflow = "";
  }

  render() {
    return (
      <div className="main-home">
        <div className="homepage-image-container"></div>
        <div className="homepage-text">
          <h1 className="homepage-header">Welcome</h1>
        </div>
        <button
          className="homepage-btn"
          onClick={() => <Redirect to="/signin" />}
        >
          Go To Blog
        </button>
      </div>
    );
  }
}

export default HomePage;
