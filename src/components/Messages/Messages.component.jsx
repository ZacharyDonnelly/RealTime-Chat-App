import React, { useContext } from "react";
import CurrentMessage from "../CurrentMessage/CurrentMessage.component";
import "./Messages.styles.scss";

import AddMessage from "../AddMessage/AddMessage.component";
import { MessagesContext } from "../../providers/MessagesProvider";
import { UserContext } from "../../providers/UserProvider";

const Messages = () => {
  const messages = useContext(MessagesContext);
  const user = useContext(UserContext);
  return (
    <section className="all-messages">
      <div className="buttons">
        <div className="green"></div>
        <div className="yellow"></div>
        <div className="red"></div>
      </div>
      <div className="window">
        <AddMessage {...user} />
        {messages
          ? messages.map(message => (
              <div className="individual-message" key={message.id}>
                <CurrentMessage {...message} {...user} key={message.id} />
              </div>
            ))
          : null}
      </div>
    </section>
  );
};

export default Messages;
