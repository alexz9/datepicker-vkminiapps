import React from 'react';
import {Button} from '@vkontakte/vkui';
import Month from './Month';
import toDate from '../utils/toDate';
import isValidDate from '../utils/isValidDate';
import dateToString from '../utils/dateToString';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.refContainer = React.createRef();
    this.isStartDate = true;

    this.state = {
      startDate: props.startDate,
      endDate: props.endDate,
      startDateInput: props.startDate ? dateToString(props.startDate) : '',
      endDateInput: props.endDate ? dateToString(props.endDate) : '',
      stepMonth: 0
    }
  }

  changeInput = (e)=>{
    this.setState({[e.target.name]: e.target.value});
    
    if(!isValidDate(e.target.value)) return;
    
    if(e.target.name === 'startDateInput') this.setState({startDate: toDate(e.target.value)});
    else this.setState({endDate: toDate(e.target.value)});
  }

  changeCalendar = (day, month, year)=>{
    const date = toDate(`${day}.${month + 1}.${year}`);

    if(this.isStartDate){
      this.setState({
        startDate: date, 
        startDateInput: dateToString(date),
        endDate: null,
        endDateInput: ''
      });
    }else if(date < this.state.startDate){
      this.setState({
        startDate: date,
        endDate: this.state.startDate,
        startDateInput: dateToString(date),
        endDateInput: this.state.startDateInput      
      });
    }else{
      this.setState({
        endDate: date,
        endDateInput: dateToString(date)
      });
    }

    this.isStartDate = !this.isStartDate;
  }

  onChange = (infinity)=>{
    const {startDate, endDate} = this.state;
    if(!infinity && (!startDate || !endDate)) return;

    if(infinity) this.props.onChange(null);
    else if(startDate > endDate) this.props.onChange({start: endDate, end: startDate});
    else this.props.onChange({start: startDate, end: endDate});

    this.props.onClose();    
  }

  handleClickOutside = (e) => {
    if (this.refContainer.current && !this.refContainer.current.contains(e.target)) this.props.onClose();
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, false);
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside, false);
  }
  render() {
    return (
      <div className="DatePicker" ref={this.refContainer}>
        <div className="rdrCalendarWrapper rdrDateDateWrapper">
          <div className="DatePicker__panel">
            <button type="button" className="Panel__arrow--minus" onClick={() => this.setState({stepMonth: this.state.stepMonth - 1})}></button>
            <div className="Inputs">
              <input className="Inputs__input" value={this.state.startDateInput} name="startDateInput" onChange={this.changeInput} placeholder="дд.мм.гггг" />
              <span className="Inputs__delimiter"></span>
              <input className="Inputs__input" value={this.state.endDateInput} name="endDateInput" onChange={this.changeInput} placeholder="дд.мм.гггг" />
            </div>
            <button type="button" className="Panel__arrow--plus" onClick={() => this.setState({stepMonth: this.state.stepMonth + 1})}></button>
          </div>
          <div className="rdrMonths rdrMonthsHorizontal">
            <Month 
              step={this.state.stepMonth}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              changeDate={this.changeCalendar}
            />
          </div>
        </div>
        <div className="DatePicker__footer">
          <Button level="secondary" align="left" size="m" onClick={()=>this.onChange(true)}>Бессрочно</Button>                
          <Button  level="primary" align="right" size="m" onClick={()=>this.onChange()}>Применить</Button>
        </div>
      </div>
    );
  }
}

export default Calendar;