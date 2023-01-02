import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ChatMessage from '../ChatMessage/ChatMessage';
import './styles.scss';

function ChatMessages() {
  const messages = useSelector((fullState) => fullState.chat.messages);
  const ulRef = useRef();

  useEffect(() => {
    if (ulRef.current) {
      // des que messages à changer, on bouge le scroll du ul tout en bas
      const { scrollHeight } = ulRef.current;
      ulRef.current.scrollTo(0, scrollHeight); // je lui dis de scroll tout en bas
    }
  }, [messages]);

  return (
    <ul className="chatMessages" ref={ulRef}>
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          {...message}
        />
      ))}
    </ul>
  );
}
ChatMessages.propTypes = {};

ChatMessages.defaultProps = {};

export default React.memo(ChatMessages);
