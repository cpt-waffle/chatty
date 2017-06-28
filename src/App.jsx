import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
//import uuidv4 from './uuid.jsx/v4';
const uuidv4 = require('uuid/v4');

  let data = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      key: "1",
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      key: "2",
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
}

//Object

class App extends Component {




  constructor(props) {
    super(props);
      this.state = {
      currentUser: {name: "Bob"},
      messages: []
    };
    this.socket = new WebSocket('ws://localhost:3001');
  }

  sendMessage = (message, user) => {
    this.socket.send(JSON.stringify({message:message, user:user, id:uuidv4()}));
    console.log(uuidv4());
    const newMessage = {username: user, content: message};
    const messages = this.state.messages.concat(newMessage);
    this.setState({messages: messages});
  }


componentDidMount() {
  console.log("componentDidMount <App />");
  //The actual socket
  //if Connected
  this.socket.onopen = function (event) {
    console.log("Connected to Server");
  };
  setTimeout(() => {
    //this.socket.send("my message has been send");
    console.log("Simulating incoming message");
    // Add a new message to the list of messages in the data store
    const newMessage = {key: 3, username: "Michelle", content: "Local singles dying to meet you!"};
    const messages = this.state.messages.concat(newMessage)
    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
    this.setState({messages: messages})
  }, 3000);
}


  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages = {this.state.messages}/>
        <ChatBar user = {this.state.currentUser} msgFunction={this.sendMessage}/>
      </div>
    );
  }
}
export default App;
