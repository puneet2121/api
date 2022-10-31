const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req,res) => {
  res.sendFile(__dirname + '/signup.html')
})
app.post('/',(req,res) => {
  console.log(req.body)
  email = req.body.email;
  password = req.body.password;
})

app.listen(port,() => {
  console.log('the server is running')
})

