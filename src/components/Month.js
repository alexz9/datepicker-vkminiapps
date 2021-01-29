import React from 'react';
import Day from './Day';
import getCalendar from '../utils/getCalendar';

const MONTH_FULL_NAMES = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];


class Month extends React.Component {
  render() {
    const calendar = getCalendar(this.props.step, this.props.startDate, this.props.endDate);
    return (
      <div className="rdrMonth">
        <div className="rdrMonthName">{`${MONTH_FULL_NAMES[calendar.month]} ${calendar.year}`}</div>
        <div className="rdrWeekDays">
          <span className="rdrWeekDay">пн</span>
          <span className="rdrWeekDay">вт</span>
          <span className="rdrWeekDay">ср</span>
          <span className="rdrWeekDay">чт</span>
          <span className="rdrWeekDay">пт</span>
          <span className="rdrWeekDay">сб</span>
          <span className="rdrWeekDay">вс</span>
        </div>
        <div className="rdrDays">
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