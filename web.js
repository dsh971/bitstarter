var express = require('express');
var fs = require('fs');


var app = express();
app.use(express.logger());

var k = fs.readFileSync('./index.html');
var buffer = new Buffer(k);
var data1 = buffer.toString("utf-8");

app.get('/', function(request, response) {
  response.send(data1);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
