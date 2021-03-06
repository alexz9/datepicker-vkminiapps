import React from 'react';
import Input from './Input';
import Button from './Button';
import Month from './Month';
import toDate from '../utils/toDate';
import isValidDate from '../utils/isValidDate';
import dateToString from '../utils/dateToString';
import getMonthForCalendar from '../utils/getMonthForCalendar';

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
      stepMonth: getMonthForCalendar(props.startDate, props.endDate, props.isRange)
    }
  }

  changeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });

    if (!isValidDate(e.target.value)) return;
    
    const date = toDate(e.target.value)    
    if (e.target.name === 'startDateInput') {    
      this.setState({ startDate:  date, stepMonth: getMonthForCalendar(date, this.state.endDate, this.props.isRange) });
    } else {
      this.setState({ endDate: date, stepMonth: getMonthForCalendar(this.state.startDate, date, this.props.isRange) });
    }
  }

  changeCalendar = (day, month, year) => {
    const date = toDate(`${day}.${month + 1}.${year}`);

    if (this.isStartDate) {
      this.setState({
        startDate: date,
        startDateInput: dateToString(date),
        endDate: null,
        endDateInput: ''
      });
    } else if (date < this.state.startDate) {
      this.setState({
        startDate: date,
        endDate: this.state.startDate,
        startDateInput: dateToString(date),
        endDateInput: this.state.startDateInput
      });
    } else {
      this.setState({
        endDate: date,
        endDateInput: dateToString(date)
      });
    }

    this.isStartDate = !this.isStartDate;

    if(!this.props.isRange){
      this.props.onChange(date);
      this.props.onClose();
    }
  }

  onChange = (infinity) => {
    const { startDate, endDate } = this.state;
    if (!infinity && (!startDate || !endDate)) return;

    if (infinity && this.props.hasInfinity) this.props.onChange(null);
    else if (!infinity && startDate > endDate) this.props.onChange({ start: endDate, end: startDate });
    else if (!infinity) this.props.onChange({ start: startDate, end: endDate });

    this.props.onClose();
  }

  handleClickOutside = (e) => {
    if (this.refContainer.current && !this.refContainer.current.contains(e.target)){
      if(!this.props.isRange && this.state.startDate) this.props.onChange(this.state.startDate);
      this.props.onClose();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, false);
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside, false);

  }
  render() {

    return (
      <div 
        className={`DatePicker${this.props.isMobi ? "--mobi" : ""}`} 
        ref={this.refContainer}
      >
        <div className="DP__rdrCalendarWrapper DP__rdrDateDateWrapper">
          <div className="DatePicker__panel">
            <button type="button" className="DP__Panel__arrow--minus" onClick={() => this.setState({ stepMonth: this.state.stepMonth - 1 })}></button>
            <div className="DP__Inputs">
              <Input 
                type="text" 
                className="DP__Inputs__input" 
                value={this.state.startDateInput} 
                name="startDateInput" 
                onChange={this.changeInput} 
                placeholder="дд.мм.гггг" 
                isMobi={this.props.isMobi}
                autoComplete="off"
              />
              {this.props.isRange &&
                <React.Fragment>
                  <span className="DP__Inputs__delimiter"></span>
                  <Input 
                    type="text" 
                    className="DP__Inputs__input" 
                    value={this.state.endDateInput} 
                    name="endDateInput" 
                    onChange={this.changeInput} 
                    placeholder="дд.мм.гггг" 
                    isMobi={this.props.isMobi}
                    autoComplete="off"
                  />
                </React.Fragment>
              }
            </div>
            <button type="button" className="DP__Panel__arrow--plus" onClick={() => this.setState({ stepMonth: this.state.stepMonth + 1 })}></button>
          </div>
          <div className="DP__rdrMonths DP__rdrMonthsHorizontal">
            <Month
              step={this.state.stepMonth}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              changeDate={this.changeCalendar}
            />
          </div>
        </div>
        {this.props.isRange &&
          <div className="DatePicker__footer">
            <Button 
              mode="secondary" 
              size={this.props.isMobi ? "m" : "s"} 
              stretched 
              onClick={() => this.onChange(true)}
            >
              {this.props.hasInfinity ? "Бессрочно" : "Отменить"}
            </Button>
            <Button 
              mode="primary" 
              size={this.props.isMobi ? "m" : "s"} 
              stretched 
              onClick={() => this.onChange()}
            >
              Применить
            </Button>
          </div>
        }
      </div>
    );
  }
}

export default Calendar;