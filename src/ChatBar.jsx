import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {user: this.props.user.name};
  }

  handleChange = (event) => {
    this.props.postNotification(event.target.value, this.state.user);
    this.setState({user: event.target.value});
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.msgFunction(event.target.value, this.state.user);
      event.target.value = "";
    }
  }

  render() {
    return (
      <footer className="chatbar">
          <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.state.user} onBlur={this.handleChange}/>
          <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress = {this.handleKeyPress } />
      </footer>
      );
  };
}
export default ChatBar;