import React from 'react';
import Calendar from './Calendar';

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