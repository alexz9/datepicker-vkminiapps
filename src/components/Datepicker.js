import React from 'react';
import IconCalendar from './IconCalendar';

import Button from './Button';
import Calendar from './Calendar';
import toDate from '../utils/toDate';
import isValidDate from '../utils/isValidDate';
import './DatePicker.css';

const MONTH_NAMES = ['янв', 'фев', 'мар', 'апр', 'мая', 'июня', 'июля', 'авг', 'сен', 'окт', 'ноя', 'дек'];

class DatePicker extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }

  render() {
    const { isOpen } = this.state;
    const { value, isRange, isMobi, theme, hasInfinity, onChange } = this.props,
      startDate = isRange && value && typeof value === 'object' && isValidDate(value.start) ? toDate(value.start) : !isRange && isValidDate(value) ? toDate(value) :  null,
      endDate = isRange && value && typeof value === 'object' && isValidDate(value.end) ? toDate(value.end) : null;

    return (
      <div className="DatePicker__container" theme={theme} style={{position: !isMobi && "relative"}}>
        <Button 
          mode="secondary" 
          size={isMobi ? "m" : "s"} 
          onClick={()=>this.setState({isOpen: true})} 
          before={<IconCalendar size={isMobi ? "m" : "s"}/>} 
        >
          {startDate && endDate 
            ? `${startDate.getDate()} ${MONTH_NAMES[startDate.getMonth()]} - ${endDate.getDate()} ${MONTH_NAMES[endDate.getMonth()]}` 
            : startDate 
            ? `${startDate.getDate()} ${MONTH_NAMES[startDate.getMonth()]} ${startDate.getFullYear()}`
            : 'Бессрочно' }
        </Button>
        {isOpen && isMobi && <div className="DatePicker__wrapper"/>}
        {isOpen &&
          <Calendar 
            onClose={()=>this.setState({isOpen: false})}
            startDate={startDate}
            endDate={endDate}
            onChange={onChange}
            isMobi={isMobi}
            isRange={isRange}
            hasInfinity={hasInfinity}
          />
        }
      </div>
    );
  }
}

export default DatePicker;