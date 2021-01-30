import React from 'react';
import { Button } from '@vkontakte/vkui';
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
    const { value } = this.props,
      startDate = value && typeof value === 'object' && isValidDate(value.start) ? toDate(value.start) : null,
      endDate = value && typeof value === 'object' && isValidDate(value.end) ? toDate(value.end) : null;

    return (
      <div>
        <Button onClick={()=>this.setState({isOpen: true})}>
          {startDate && endDate ? `${startDate.getDate()} ${MONTH_NAMES[startDate.getMonth()]} - ${endDate.getDate()} ${MONTH_NAMES[endDate.getMonth()]}` : 'Бессрочно' }
        </Button>
        {this.state.isOpen &&
          <Calendar 
            onClose={()=>this.setState({isOpen: false})}
            startDate={startDate}
            endDate={endDate}
            onChange={this.props.onChange}
            isMobi={this.props.isMobi}
          />
        }
      </div>
    );
  }
}

export default DatePicker;