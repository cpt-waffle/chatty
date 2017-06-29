import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    //console.log("HERE");
    //console.log(this.props.user.name);
    this.state = {user: this.props.user.name};
  }

  handleChange = (event) => {
    console.log("THIS USER=>>" + this.state.user);

    this.props.postNotification(event.target.value, this.state.user);
    this.setState({user: event.target.value});
  }

  handleKeyPress = (event) => {
    //console.log(event.key);
    if (event.key === 'Enter')
    {
      //console.log("ENTER PRESSED");
      //console.log(event.target.value);
      //console.log("////");
      //console.log(this.props);

      this.props.msgFunction(event.target.value, this.state.user);
    }
  }

  render() {
    console.log("Rendering <ChatBar/>");
    //console.log(this.props.user);
    return (
      <footer className="chatbar">
          <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.state.user} onBlur={this.handleChange}/>
          <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress = {this.handleKeyPress }/>
      </footer>
      );
  };
}
export default ChatBar;