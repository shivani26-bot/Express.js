const express = require("express"); //we get access to express function
const app = express(); // app is a new express application object
// this call has abstracted everything, this will do every thing like we do in socket programming
// creating a socket object binding to local host and port and accepting connection request to happen
const bodyParser = require("body-parser"); //helps to read incoming body data object and parse it in corresponding json
// All we have to do is:
// 1. using app object , bind it to a port u want  your server to listen for socket connections
const PORT = 3000;
//middleware
app.use(bodyParser.json()); //whenever there is incoming body request object and type is json, body parser starts parsing that json successfully
app.use(bodyParser.text()); //enables to use raw text
app.use(bodyParser.urlencoded({ extended: true })); //for parsing application/ x-www-form-urlencoded
// for every route specify a specific action
//when somebody hits /ping it will execute the callback
// logic of the execution of the callback is written in express
// function f(cb){
// cb(req,res);
// }
// req will be sent from the client side and res will be sent from the server side
// we can read parameters from req object an configure our response object to send something
// request object contains detail about incoming request, details like query params, body params etc
//response object contains details about what response will be sent back to the client
app.get("/ping", (req, res) => {
  // if somebody hits localhost:3000/ping  from this machine we will execute this callback
  console.log("ping received");
  //consoles query params in the request url
  console.log(req.query); // if we make request at localhost:3000/ping?key="value"&min_price=10, output is:{ key: '"value"', min_price: '10' }
  console.log(req.body); //after using middleware bodyparser , we get { name: 'shivani', company: 'torry harris' }
  res.json({ message: "ping received" }); //response object
  //   res.send("ping received");
}); //takes 2 arguments 1. route as string , 2. callback

//variable part of the url is denoted as :
// express parses : , it assumes that id and category are variable part of the url
app.post("/categories/:category/products/:id", (req, res) => {
  console.log(req.params); //if url is:localhost:3000/categories/electronics/products/8 , output is :{ category: 'electronics', id: '8' }
  res.json({ message: "params received" });
});
app.listen(PORT, () => {
  // this callback is executed, once we successfully bind out object to the port and start listening to a new connection
  console.log(`server started at port 3000`);
  //this callback is useful to do any action post the server is created
  // ex: db connection
  //usecase: making a database connection
}); //listen method takes 2 parameter , 1. port number, 2. callback

//how client will send the data using
// url params: data is embedded in the url, /products/1 or /products/2
// query params: after ? query=value, /products?rating=4&min_price=30&max_price=100
// problem with url and query params is that both can be saved in browser history, donot send sesitive data over these two
// body params:  not visible in the url , can send sensitive data
