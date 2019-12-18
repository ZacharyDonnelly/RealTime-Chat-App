import React from "react";
import CurrentMessage from "../CurrentMessage/CurrentMessage.component";

import "./Messages.styles.scss";
import AddMessage from "../AddMessage/AddMessage.component";

const Messages = ({ messages }) => {
  return (
    <section>
      <AddMessage />
      {messages.map(message => (
        <CurrentMessage {...message} key={message.id} />
      ))}
    </section>
  );
};

export default Messages;
