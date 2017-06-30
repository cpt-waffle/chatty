import React, {Component} from 'react';

class Notification extends Component {
  render() {
    //console.log("Rendering <Message/>");
  console.log(this.props.message);

    return (
    <div className="message system">
      <span className="message">{this.props.message}</span>
  </div>
    );
  };
}
export default Notification;