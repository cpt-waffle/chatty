import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {


  render() {
    //console.log(this.props.messages);

    let array = [];
    for (let i in this.props.messages)
    {
      //console.log(this.props.messages[i].username);
      array.push(<Message key = {this.props.messages[i].key} username = {this.props.messages[i].username} message={this.props.messages[i].content}/>);
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