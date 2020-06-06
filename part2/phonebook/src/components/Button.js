import React from 'react';

const Button = ({text, handleButtonClick}) => {
  return (
    <button onClick={handleButtonClick}>{text}</button>
  );
};

export default Button;