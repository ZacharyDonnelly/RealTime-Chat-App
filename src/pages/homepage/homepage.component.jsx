import React from "react";
import "./homepage.styles.scss";

class HomePage extends React.Component {
  componentDidMount() {
    document.body.style.overflow = "hidden";
  }

  componentDidUnMount() {
    document.body.style.overflow = "";
  }

  handleClick = () => {};

  render() {
    return (
      <div className="main-home">
        <div className="homepage-image-container"></div>
        <div className="homepage-text">
          <h1 className="homepage-header">Welcome</h1>
        </div>
        <button
          className="homepage-btn"
          onClick={() => this.props.history.push("/signin")}
        >
          Go To Blog
        </button>
      </div>
    );
  }
}

export default HomePage;
