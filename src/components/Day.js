import React from 'react';

class Day extends React.Component {
  render() {
    let {isToday, passive, value, status, month, year} = this.props;

    return (
      <button 
        type="button" 
        className={`rdrDay ${passive ? "rdrDayPassive" : isToday ? "rdrDayToday" : ""}`}
        onClick={() => this.props.onClick(value, month, year)} 
      >
        <span className={status === "start" ? "rdrStartEdge" : status === "end" ? "rdrEndEdge" : status === "inRange" ? "rdrInRange" : null}></span>
        <span className="rdrDayNumber">
          <span>{value}</span>
        </span>
      </button>
    );
  }
}

export default Day;