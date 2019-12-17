import React from "react";

import "./CustomLogin-Button.styles.scss";

const CustomLogin = ({ choice, signInWithGoogle }) => {
  return (
    <div className="login-button" onClick={signInWithGoogle}>
      <div className="icons-top envelope">
        <i className="fa fa-envelope fa-2x"></i>
      </div>
      <div className="login-button-text">{choice} With Email</div>
    </div>
  );
};

export default CustomLogin;
