import React, {Component} from 'react';
import Message from './Message.jsx';
import Notification from './Notification.jsx';

class MessageList extends Component {


  render() {
    //console.log(this.props.messages);

    let array = [];
    for (let i in this.props.messages)
    {
      if (this.props.messages[i].type === "postMessage")
      {
        //console.log("COLOR IS =" + this.props.color);
        //console.log("INSIDE POST MESSAGE");
        array.push(<Message key = {this.props.messages[i].key} username = {this.props.messages[i].username} message={this.props.messages[i].content} color={this.props.color}/>);
      }
      if (this.props.messages[i].type === "postNotification")
      {
        array.push(<Notification message = {this.props.messages[i].content}/>)
      }
    }
    //console.log(array);

    console.log("Rendering <MessageList/>");
    return (
      <main className="messages">
      {array}
      </main>
      );
  };
}
export default MessageList;