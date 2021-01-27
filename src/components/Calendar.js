import React from 'react';
import {Button} from '@vkontakte/vkui';
import Month from './Month';
import toDate from '../utils/toDate';
import dateToString from '../utils/dateToString';

const REG_IS_DATE = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/g;

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

  changeDate = (day, month, year)=>{
    const date = toDate(`${day}.${month}.${year}`);

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
    if(!infinity && (!this.state.startDate || !this.state.endDate)) return;

    if(infinity) this.props.onChange(null);
    else this.props.onChange({start: this.state.startDate, end: this.state.endDate});

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
              <input className="Inputs__input" value={this.state.startDateInput} onChange={() => {}} onBlur={() => {}} placeholder="дд.мм.гггг" />
              <span className="Inputs__delimiter"></span>
              <input className="Inputs__input" value={this.state.endDateInput} onChange={() => {}} onBlur={() => {}} placeholder="дд.мм.гггг" />
            </div>
            <button type="button" className="Panel__arrow--plus" onClick={() => this.setState({stepMonth: this.state.stepMonth + 1})}></button>
          </div>
          <div className="rdrMonths rdrMonthsHorizontal">
            <Month 
              step={this.state.stepMonth}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              changeDate={this.changeDate}
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