import React from 'react';
import DatePicker from './Datepicker';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    }
  }
  
  render(){
    return(
      <DatePicker
        selected={this.state.date}
        onChange={(date)=>this.setState({date: date})}      
      />
    );
  }

}