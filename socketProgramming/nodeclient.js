const net = require("net");
const client = net.createConnection({ port: 8083 }, () => {
  console.log("client connected");
  //send data from client
  client.write("hello from node client");
});

client.on("data", (data) => {
  console.log(data.toString());
});
