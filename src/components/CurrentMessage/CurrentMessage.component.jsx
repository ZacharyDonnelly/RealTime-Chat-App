import React from "react";

const CurrentMessage = ({ message, user }) => {
  return (
    <article className="Message">
      <div className="Message--meta">
        <div>{message}</div>
      </div>
      <div className="User--meta">
        <p>Posted by {user.displayName}</p>
      </div>
    </article>
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
