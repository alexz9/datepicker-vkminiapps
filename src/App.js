import React from 'react';
import DatePicker from './components/DatePicker';
import '@vkontakte/vkui/dist/vkui.css';

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
        isMobi={false}
      />
    );
  }

}

export default App;