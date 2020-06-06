import React from 'react';

const Message = ({message, type}) => {
  if(!message) {
    return null;
  }

  return(
    <div className={`message ${type ? 'message--' + type : ''}`}>{message}</div>
  );
};

export default Message;