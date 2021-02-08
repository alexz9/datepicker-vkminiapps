import React from 'react';
import Day from './Day';
import getCalendar from '../utils/getCalendar';

const MONTH_FULL_NAMES = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];


class Month extends React.Component {
  render() {
    const calendar = getCalendar(this.props.step, this.props.startDate, this.props.endDate);
    return (
      <div className="DP__rdrMonth">
        <div className="DP__rdrMonthName">{`${MONTH_FULL_NAMES[calendar.month]} ${calendar.year}`}</div>
        <div className="DP__rdrWeekDays">
          <span className="DP__rdrWeekDay">пн</span>
          <span className="DP__rdrWeekDay">вт</span>
          <span className="DP__rdrWeekDay">ср</span>
          <span className="DP__rdrWeekDay">чт</span>
          <span className="DP__rdrWeekDay">пт</span>
          <span className="DP__rdrWeekDay">сб</span>
          <span className="DP__rdrWeekDay">вс</span>
        </div>
        <div className="DP__rdrDays">
          {calendar.days.map((item, i)=>
            <Day 
              key={i} 
              {...item} 
              month={calendar.month} 
              year={calendar.year}
              onClick={this.props.changeDate}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Month;