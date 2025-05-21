const net = require("net"); //used for socket programming

// createServer is a method which accepts callback and returns server object
// configure the server such that when any client send data to the server what will happen

const server = net.createServer((socket) => {
  // we can access socket object here
  // javascript is event driven programming, when client will initiate new socket connection and send the data then we have to execute the callback

  socket.on("data", (data) => {
    //data is binary data
    console.log("data received from client", data.toString());
  });

  //   send data from the server
  socket.write("Hello from node server");
});

//listen to the server object

server.listen(8083, () => {
  // once the server starts listening at port 8083 the callback will run
  console.log("new server up on port 8083");
});

// server is written in node
// client is written in python (server and client port should be same)
// despite of the language any server and client can communicate with each other
