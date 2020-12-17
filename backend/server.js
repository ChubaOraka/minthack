const { response } = require('express');
const express = require('express');
const path = require('path');
const { output } = require('./webpack.config');
const app = express(),
      bodyParser = require("body-parser");
      port = process.env.PORT || 3080;

// place holder for the data
const users = [];

var Sandbox = require("sandbox")

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/backend/users', (req, res) => {
  console.log('backend/users called!')
  res.json(users);
});

app.post('/backend/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.post('/backend/javascript/test', (req, res) => {
  console.log('/javascript/test called!')

  const testDefs = `
  testOutput(adder(100, 23), 123);
  testOutput(adder(23, 45), 68);
  // add more tests here
  `
  

  console.log(req.body.command)
  let command = req.body.command

  var sandbox = new Sandbox();
  sandbox.run(command, function (output) {
    res.json(output)
  });
  // sandbox.on('message', function (message) {
    // Handle message sent from the inside
    // In this example message will be 'hello from inside'
  // });
  // sandbox.postMessage('hello from outside');

  
  
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});