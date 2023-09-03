import React from 'react';
import { useMessage } from '../context/MessageContext'

function MessageDisplay() {
  const { message } = useMessage();

  return (
    <div>
      <h2>Message:</h2>
      <p>{message}</p>
    </div>
  );
}

export default MessageDisplay;