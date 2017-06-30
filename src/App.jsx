import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
//import uuidv4 from './uuid.jsx/v4';
const uuidv4 = require('uuid/v4');


//Object

class App extends Component {




  constructor(props) {
    super(props);
      this.state = {
      currentUser: {name: "Anonymous"},
      messages: [],
      usersOnline: 0,
    };
    this.color = "";

    this.socket = new WebSocket('ws://localhost:3001');
  }

  sendMessage = (message, user) => {
    this.socket.send(JSON.stringify({message:message, user:user, id:uuidv4(), type:"postMessage", color: this.color}));
  }

  postNotification = (newUser, oldUser) => {
    this.socket.send(JSON.stringify({newUser:newUser, oldUser:oldUser, type:"postNotification", id: uuidv4()}))
  }
componentDidMount() {
  //The actual socket
  //if Connected
  this.socket.onopen = (event) => {
    //CONECTION MADE/////////////////////////////////////////////////////////////
    this.socket.onmessage = (event) => {
      let data = JSON.parse(event.data);

      if (data.type === "postMessage") {
        const newMessage = {username: data.user, content:data.message, key: data.id, type: data.type, color: data.color};
        const messages = this.state.messages.concat(newMessage);
        this.setState({messages: messages});
      }

      if (data.type === "postNotification")
      {
        const content = data.oldUser + " changed name to " + data.newUser;
        const newNotification = {type: data.type, content: content, key: data.id};
        const messages = this.state.messages.concat(newNotification);
        this.setState({messages: messages})
      }
      if (data.type === "userCount") {
        this.setState({usersOnline: data.userNumber});

      }
      if (data.type === "userColor") {
        this.color = data.color;
      }
    };
  };

  setTimeout(() => {
    const newMessage = {key: 3, username: "Michelle", content: "Local singles dying to meet you!"};
    const messages = this.state.messages.concat(newMessage)
    this.setState({messages: messages})
  }, 3000);
}

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <h3 className="counter" >Users Online: {this.state.usersOnline}</h3>
        </nav>
        <MessageList messages = {this.state.messages}/>
        <ChatBar user = {this.state.currentUser} msgFunction={this.sendMessage} postNotification={this.postNotification}/>
      </div>
    );
  }
}
export default App;
