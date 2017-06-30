import React, {Component} from 'react';

class Notification extends Component {
  render() {

    return (
    <div className="message system">
      <span className="message">{this.props.message}</span>
  </div>
    );
  };
}
export default Notification;