import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.scss';

function ChatMessage({
  text, author,
  className,
  ...rest
}) {
  return (
    <li
      className={cn('chatMessage', className)}
      {...rest}
    >
      <span className="chatMessage--author">
        {author}
      </span>
      <div className="chatMessage--text">
        {text}
      </div>
    </li>
  );
}
ChatMessage.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ChatMessage.defaultProps = {
  className: '',
};

export default React.memo(ChatMessage);
