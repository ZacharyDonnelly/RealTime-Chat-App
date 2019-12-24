import React from "react";

import "./CustomLogin-Button.styles.scss";

const CustomSignUp = ({ choice, buttonClicked }) => {
  return (
    <div className="login-button" onClick={buttonClicked}>
      <div className="icons-top envelope">
        <i className="fa fa-envelope fa-2x"></i>
      </div>
      <div className="login-button-text">{choice} With Email</div>
    </div>
  );
};
CustomSignUp.defaultProps = {
  choice: "Sign-up"
};

export default CustomSignUp;
