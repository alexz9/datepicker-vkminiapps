import React from 'react';
import './Button.css';

const Button = (props) => {

  const handleClick = () => {
    if (typeof props.onClick === 'function') props.onClick();
  }

  const sizes = ["s", "m", "l"];
  const modes = ["secondary", "primary"];

  const { size, mode, before, after, stretched, children } = props;

  return (
    <button
      className={`
        Button 
        Button--android 
        Button--sz-${sizes.includes(size) ? size : this.defaultProps.size}
        Button--lvl-${modes.includes(mode) ? mode : this.defaultProps.mode}
        Button--aln-center         
        ${Boolean(after || before) && "Button--with-icon"} 
        ${Boolean(stretched) && "Button--str"} 
        `}
      //className={Object.keys(this.state.buttonClasses).join(" ")}
      onClick={handleClick}
    >
      <div className="Button__in">
        {before && <div className="Button__before">{before}</div>}
        <div>{children}</div>
        {after && <div className="Button__after">{after}</div>}
      </div>
      <span className="Button__hoverShadow"></span>
    </button>
  );

}

Button.defaultProps = {
  size: "s",
  mode: "primary"
}

export default Button;