import React, { useContext } from "react";
import CurrentMessage from "../CurrentMessage/CurrentMessage.component";

import "./Messages.styles.scss";
import AddMessage from "../AddMessage/AddMessage.component";
import { MessagesContext } from "../../providers/MessagesProvider";

const Messages = ({ user, displayName, email, uid }) => {
  const messages = useContext(MessagesContext);
  return (
    <section className="all-messages">
      <AddMessage displayName={displayName} email={email} uid={uid} />
      {messages.map(message => (
        <div className="individual-message">
          <CurrentMessage {...message} {...user} key={message.id} />
        </div>
      ))}
    </section>
  );
};

export default Messages;
