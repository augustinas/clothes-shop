var port = process.env.PORT || 3000
var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello world');
})

var server = app.listen(port, function() {
  console.log('Server %s listening on %s', process.pid, port);
});
