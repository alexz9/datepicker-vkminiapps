import React from 'react';
import DatePicker from './components/DatePicker';

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
        value={this.state.date}
        onChange={(date)=>this.setState({date: date})}   
        isMobi={false}
        isRange={false}
      />
    );
  }

}

export default App;