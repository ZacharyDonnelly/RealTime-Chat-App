import React from "react";

import { signOut } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";

import "./CurrentUser.styles.scss";
const CurrentUser = ({ displayName, photoURL, email, children }) => {
  return (
    <section className="CurrentUser">
      <div className="CurrentUser--profile">
        {/* {photoURL && <img src={photoURL} alt={displayName} />} */}
        <div className="CurrentUser--information">
          <h2 className="userDisplay">{displayName}</h2>
          <p className="email">{email}</p>
        </div>
      </div>
      <div>
        <div>{children}</div>
        <Link to="/" onClick={signOut}>
          Sign Out
        </Link>
      </div>
    </section>
  );
};
CurrentUser.defaultProps = {
  displayName: "Bill Murray",
  email: "billmurray@mailinator.com",
  photoURL: "https://www.fillmurray.com/300/300",
  createdAt: new Date()
};
export default CurrentUser;
