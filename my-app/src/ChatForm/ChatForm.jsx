import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { actionAddMessage } from '../../actions/chatActions';

import './styles.scss';

function ChatForm() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      return; // pour ne pas envoyer de message si c'est vide.
    }
    dispatch(
      actionAddMessage(inputValue),
    );

    setInputValue('');
  };

  return (
    <form className="chatForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Saisissez votre message..."
        className="chatForm--input"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button
        type="submit"
        className="chatForm--button"
      >
        {'>'}
      </button>
    </form>
  );
}
ChatForm.propTypes = {
};

ChatForm.defaultProps = {};

export default React.memo(ChatForm);
