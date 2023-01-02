import { memo } from 'react';
import ChatForm from '../ChatForm/ChatForm';
import ChatMessages from '../ChatMessages/ChatMessages';
import './styles.scss';

function App() {
  return (
    <div className="app">
      <ChatMessages />
      <ChatForm />
    </div>
  );
}

export default memo(App);
