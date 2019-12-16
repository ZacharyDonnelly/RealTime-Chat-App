import React from "react";
import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <>
      <div className="homepage-image-container"></div>
      <div className="homepage-text">
        <h1 className="homepage-header">Welcome</h1>
      </div>
      <button className="homepage-btn">Go To Blog</button>
    </>
  );
};

export default HomePage;
