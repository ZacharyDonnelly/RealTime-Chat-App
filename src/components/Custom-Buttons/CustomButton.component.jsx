import React from "react";

import "./CustomButton.styles.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";
const CustomButton = ({ choice }) => {
  return (
    <div className="custom-button gplus" onClick={signInWithGoogle}>
      <div className="icons fa-gplus">
        <i className="fa fa-google"></i>
      </div>
      <div className="signtext">Sign-{choice} with Gmail</div>
    </div>
  );
};

export default CustomButton;
