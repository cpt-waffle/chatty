// server.js

const express = require('express');
const SocketServer = require('ws');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer.Server({ server });
let usersOnline = {userNumber: 0, type: "userCount"};
let userColor = {color: "", type:"userColor"};
let colors = ["red", "blue", "green", "yellow", "purple", "black"];

let randomColor = () =>
{
  return colors[Math.floor((Math.random()*5))];
}

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    console.log("==>"+SocketServer.OPEN);
    //console.log(client.readyState === WebSoc00000000000ket.OPEN);
    if (client.readyState === SocketServer.OPEN) {
      client.send(data);
    }
  });
};

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');
  usersOnline.userNumber++;
  //console.log(ws);
  userColor.color = randomColor();
  //console.log(usersOnline);
  wss.broadcast(JSON.stringify(usersOnline));
  ws.send(JSON.stringify(userColor));

  ws.on('message', (event) => {
    console.log(event);
    let message_received = JSON.parse(event);
    if (message_received.type === "postMessage") {
      console.log(message_received.user + " said " + message_received.message);
      console.log(message_received.id);
      wss.broadcast(event);
    }
    if (message_received.type === "postNotification")
    {
      console.log("GOT THE postNotification")
      wss.broadcast(event);
    }

  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    usersOnline.userNumber--;
    wss.broadcast(JSON.stringify(usersOnline));
    console.log('Client disconnected')
  });
});
