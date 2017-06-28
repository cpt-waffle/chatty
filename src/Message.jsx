import React, {Component} from 'react';

class Message  extends Component {
  render() {
    //console.log("Rendering <Message/>");
    //console.log(this.props.message);
    return (
    <div className="message">
      <span className="username">{this.props.username}</span>
      <span className="message">{this.props.message}</span>
  </div>
    );
  };
}
export default Message;