import React from "react";

import "./CustomLogin-Button.styles.scss";

const CustomLogin = ({ choice }) => {
  return (
    <div className="back-div">
      <div className="login-button">
        <div className="login-button-text">{choice} With Email</div>
      </div>
    </div>
  );
};

export default CustomLogin;
