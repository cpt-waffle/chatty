import React, {Component} from 'react';
import Message from './Message.jsx';
import Notification from './Notification.jsx';

class MessageList extends Component {


  render() {

    let array = [];
    for (let i in this.props.messages)
    {
      if (this.props.messages[i].type === "postMessage")
      {
       array.push(<Message key = {this.props.messages[i].key} username = {this.props.messages[i].username} message={this.props.messages[i].content} color={this.props.messages[i].color}/>);
      }
      if (this.props.messages[i].type === "postNotification")
      {
        array.push(<Notification message = {this.props.messages[i].content}/>)
      }
    }
    return (
      <main className="messages">
      {array}
      </main>
      );
  };
}
export default MessageList;