import React from 'react';

class Day extends React.Component {
  render() {
    let {isToday, passive, value, status, month, year} = this.props;

    return (
      <button 
        type="button" 
        className={`DP__rdrDay ${passive ? "DP__rdrDayPassive" : isToday ? "DP__rdrDayToday" : ""}`}
        onClick={() => this.props.onClick(value, month, year)} 
      >
        <span className={status === "start" ? "DP__rdrStartEdge" : status === "end" ? "DP__rdrEndEdge" : status === "inRange" ? "DP__rdrInRange" : null}></span>
        <span className="DP__rdrDayNumber">
          <span>{value}</span>
        </span>
      </button>
    );
  }
}

export default Day;