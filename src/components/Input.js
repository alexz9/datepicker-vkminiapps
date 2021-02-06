import React from 'react';
import './Input.css';

const Input = (props) => {
  return (
    <div className="FormField FormField--android Input Input--android Inputs__input Input--sizeY-regular">
      <input {...props} className="Input__el"/>
      <div className="FormField__border"></div>
    </div>
  );
}

export default Input;