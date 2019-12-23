import React from "react";
import "./CurrentMessage.styles.scss";

const CurrentMessage = ({ message, user }) => {
  return (
    <div className="message-container">
      <article className="messages">
        <div className="User--meta">
          <p>
            <span style={{ color: "red" }}>{user.displayName}</span>
            <span style={{ color: "black" }}>@dev:</span>
          </p>
        </div>
        <div className="Message--meta">
          <p>{message}</p>
        </div>
      </article>
    </div>
  );
};

CurrentMessage.defaultProps = {
  user: {
    displayName: "Bill Murray",
    email: "test@test.com"
  },
  createdAt: new Date()
};

export default CurrentMessage;
