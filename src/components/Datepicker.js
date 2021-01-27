import React from 'react';
import Calendar from './Calendar';
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
    return (
      <div>
        <button onClick={()=>this.setState({isOpen: true})}>Открыть</button>
        {this.state.isOpen &&
          <Calendar 
            onClose={()=>this.setState({isOpen: false})}
          />
        }
      </div>
    );
  }
}

export default DatePicker;