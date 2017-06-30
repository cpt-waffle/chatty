import React, {Component} from 'react';

class Message  extends Component {
  render() {
    //console.log("Rendering <Message/>");
    console.log("COLOR THIS IS COLOR = "+this.props.color);
    return (
    <div className="message">
      <span className="username" style={{color:this.props.color}} >{this.props.username}</span>
      <span className="message">{this.props.message}</span>
  </div>
    );
  };
}
export default Message;