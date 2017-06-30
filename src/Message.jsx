import React, {Component} from 'react';

class Message  extends Component {
  render() {
    return (
    <div className="message">
      <span className="username" style={{color:this.props.color}} >{this.props.username}</span>
      <span className="message">{this.props.message}</span>
  </div>
    );
  };
}
export default Message;