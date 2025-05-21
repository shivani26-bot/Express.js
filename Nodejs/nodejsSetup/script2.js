const http = require("http");
// const server = http.createServer(function (req, res) {
//   //Extract data from the URL
//   console.log("req headers", req.headers);
//   console.log("req method", req.method);
//   console.log("req url", req.url);
//   res.end("hello world");
// });

//To extract the query you’ll have to make use of the URL module.
// The URL module will parse the request URL to a JavaScript object.
const url = require("url");
const server = http.createServer((req, res) => {
  const urlData = url.parse(req.url, true);
  console.log("urldata", urlData);
  res.end("Thank you Mario, but our princess is in another castle...");
});

server.listen(3000, () => {
  console.log("server started on localhost:3000!");
});

// res.end() is a method used to end an HTTP response. It is part of the http module and is typically used when creating a server to signal that the response has been fully sent to the client.
// Ends the response: It indicates to the server that the response is complete. If you're working with an HTTP server, after calling res.end(), the server will send the response back to the client, and no further data can be written to the response.

// Optional data: You can pass data (usually a string or a buffer) to res.end(), which will be sent as the final part of the response body. If you don't pass any data, it will simply end the response without sending any content.
// res.end([data], [encoding]);
// data: (optional) The data you want to send with the response (could be a string, buffer, or object).
// encoding: (optional) If the data is a string, you can specify the encoding (e.g., "utf8").

// create a server instance using http.createServer() function.
// The function takes two arguments:
// request object (req)
// response object (res)

// Both arguments are stream objects.
// After creating a server, set a response in the handler (callback function).
// The last thing to do is to set up a port on which this server will run. You can do that by calling server.listen() and passing any valid port number:

// The Request object is an instance of http.IncomingMessage that extends readable stream and contains information on the incoming client data, such as:

// request URL
// request method (GET/POST/PUT/DELETE)
// request body
// request headers, etc.
