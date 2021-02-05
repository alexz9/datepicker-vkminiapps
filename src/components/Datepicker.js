import React from 'react';
import { Button } from '@vkontakte/vkui';
import Icon56EventOutline from '@vkontakte/icons/dist/56/event_outline';
import '@vkontakte/vkui/dist/vkui.css';

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
    const { value, isRange } = this.props,
      startDate = isRange && value && typeof value === 'object' && isValidDate(value.start) ? toDate(value.start) : !isRange && isValidDate(value) ? toDate(value) :  null,
      endDate = isRange && value && typeof value === 'object' && isValidDate(value.end) ? toDate(value.end) : null;

    return (
      <div>
        <Button 
          level="secondary" 
          size="m" 
          onClick={()=>this.setState({isOpen: true})} 
          before={<Icon56EventOutline width={24} height={24}/>} 
        >
          {startDate && endDate 
            ? `${startDate.getDate()} ${MONTH_NAMES[startDate.getMonth()]} - ${endDate.getDate()} ${MONTH_NAMES[endDate.getMonth()]}` 
            : startDate 
            ? `${startDate.getDate()} ${MONTH_NAMES[startDate.getMonth()]} ${startDate.getFullYear()}`
            : 'Бессрочно' }
        </Button>
        {this.state.isOpen &&
          <Calendar 
            onClose={()=>this.setState({isOpen: false})}
            startDate={startDate}
            endDate={endDate}
            onChange={this.props.onChange}
            isMobi={this.props.isMobi}
            isRange={this.props.isRange}
          />
        }
      </div>
    );
  }
}

export default DatePicker;