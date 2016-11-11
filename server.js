var express = require("express")

// Create API project in this file
// Hello World example code
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
