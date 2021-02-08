import React from 'react';

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
      DP__Button 
      DP__Button--android 
      DP__Button--sz-${sizes.includes(size) ? size : this.defaultProps.size}
      DP__Button--lvl-${modes.includes(mode) ? mode : this.defaultProps.mode}
      DP__Button--aln-center         
      ${Boolean(after || before) && "DP__Button--with-icon"} 
      ${Boolean(stretched) && "DP__Button--str"} 
      `}
      onClick={handleClick}
    >
      <div className="DP__Button__in">
        {before && <div className="DP__Button__before">{before}</div>}
        <div>{children}</div>
        {after && <div className="DP__Button__after">{after}</div>}
      </div>
      <span className="DP__Button__hoverShadow"></span>
    </button>
  );

}

Button.defaultProps = {
  size: "s",
  mode: "primary"
}

export default Button;