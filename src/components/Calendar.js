import React from 'react';
import Month from './Month';
import toDate from '../utils/toDate';
import dateToString from '../utils/dateToString';

const REG_IS_DATE = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/g;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.refContainer = React.createRef();
    this.isStartRange = true;

    this.state = {
      startRange: props.startRange,
      endRange: props.endRange,
      startRangeInput: '',
      endRangeInput: '',
      stepMonth: 0
    }
  }

  changeDate = (day, month, year)=>{
    const date = toDate(`${day}.${month}.${year}`);

    if(this.isStartRange){
      this.setState({
        startRange: date, 
        startRangeInput: dateToString(date),
        endRange: null,
        endRangeInput: ''
      });
    }else if(date < this.state.startRange){
      this.setState({
        startRange: date,
        endRange: this.state.startRange,
        startRangeInput: dateToString(date),
        endRangeInput: this.state.startRangeInput      
      });
    }else{
      this.setState({
        endRange: date,
        endRangeInput: dateToString(date)
      });
    }

    this.isStartRange = !this.isStartRange;
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
        <div className="rdrCalendarWrapper rdrDateRangeWrapper">
          <div className="DatePicker__panel">
            <button type="button" className="Panel__arrow--minus" onClick={() => this.setState({stepMonth: this.state.stepMonth - 1})}></button>
            <div className="Inputs">
              <input className="Inputs__input" value={this.state.startRangeInput} onChange={() => {}} onBlur={() => {}} placeholder="дд.мм.гггг" />
              <span className="Inputs__delimiter"></span>
              <input className="Inputs__input" value={this.state.endRangeInput} onChange={() => {}} onBlur={() => {}} placeholder="дд.мм.гггг" />
            </div>
            <button type="button" className="Panel__arrow--plus" onClick={() => this.setState({stepMonth: this.state.stepMonth + 1})}></button>
          </div>
          <div className="rdrMonths rdrMonthsHorizontal">
            <Month 
              step={this.state.stepMonth}
              startRange={this.state.startRange}
              endRange={this.state.endRange}
              changeDate={this.changeDate}
            />
          </div>
        </div>
        <div className="DatePicker__footer">
          <button level="secondary" align="left" size="m" onClick={() => {}}>Бессрочно</button>
          <button level="primary" align="right" size="m" onClick={() => {}}>Применить</button>
        </div>
      </div>
    );
  }
}

export default Calendar;