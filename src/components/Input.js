import React from 'react';

const Input = (props) => {

  return (
    <div className="DP__FormField DP__FormField--android DP__Input DP__Input--android DP__Inputs__input">
      <input {...props} className={`DP__Input__el--${props.isMobi ? "m" : "s"}`}/>
      <div className="DP__FormField__border"></div>
    </div>
  );
}

export default Input;