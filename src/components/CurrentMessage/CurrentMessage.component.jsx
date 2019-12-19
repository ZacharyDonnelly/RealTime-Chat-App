import React from "react";

import "./CurrentMessage.styles.scss";

const CurrentMessage = ({ message, user: { displayName } }) => {
  return (
    <div className="message-container">
      <article className="Message">
        <div className="Message--meta">
          <div>{message}</div>
        </div>
        <div className="User--meta">
          <p>Posted by {displayName}</p>
        </div>
      </article>
    </div>
  );
};

CurrentMessage.defaultProps = {
  user: {
    id: "123",
    displayName: "Bill Murray",
    email: "billmurray@mailinator.com",
    photoURL: "https://www.fillmurray.com/300/300"
  },
  createdAt: new Date()
};

export default CurrentMessage;
