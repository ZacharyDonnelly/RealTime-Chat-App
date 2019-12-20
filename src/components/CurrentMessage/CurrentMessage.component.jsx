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
          <p>{displayName}</p>
        </div>
      </article>
    </div>
  );
};

CurrentMessage.defaultProps = {
  user: {
    id: "123",
    displayName: "Bill Murray",
    email: "test@test.com"
  },
  createdAt: new Date()
};

export default CurrentMessage;
