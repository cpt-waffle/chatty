import React, {Component} from 'react';

class ChatBar extends Component {
  handleKeyPress = (event) => {
    //console.log(event.key);
    if (event.key === 'Enter')
    {
      //this.socket.send('hello');
      //console.log("ENTER PRESSED");
      //console.log(event.target.value);
      this.props.msgFunction(event.target.value, this.textInput.value);
    }
  }

  render() {
    console.log("Rendering <ChatBar/>");
    console.log(this.props.user);
    return (
      <footer className="chatbar">
          <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.user.name} ref={(input) => {this.textInput = input;}}/>
          <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress = {this.handleKeyPress }/>
      </footer>
      );
  };
}
export default ChatBar;