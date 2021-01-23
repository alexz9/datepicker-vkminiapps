import React from 'react';

class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.refContainer = React.createRef();
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
      <div ref={this.refContainer}>123</div>
    );
  }
}

export default Calendar;