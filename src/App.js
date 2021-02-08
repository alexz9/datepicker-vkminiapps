import React from 'react';
import DatePicker from './components/DatePicker';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: null
    }
  }
  onChange = (date)=>{
    this.setState({date: date});
  }
  render(){
    return(
      <DatePicker
        value={this.state.date}
        onChange={this.onChange}   
        isMobi={true}
        isRange={true}
        theme={"dark"}
      />
    );
  }

}

export default App;