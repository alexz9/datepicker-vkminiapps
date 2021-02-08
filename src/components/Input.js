import React from 'react';

const Input = (props) => {
  return (
    <div className="DP__FormField DP__FormField--android DP__Input DP__Input--android DP__Inputs__input DP__Input--sizeY-regular">
      <input {...props} className="DP__Input__el"/>
      <div className="DP__FormField__border"></div>
    </div>
  );
}

export default Input;