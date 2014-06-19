var connect = require('connect'), express = require('express'), path = require('path'), http = require('http');
var os = require('os')

var requestNo = 0

var app = express()

app.get('/', function(req,res) {
  requestNo += 1
  console.log(requestNo)
  res.sendfile('static/index.html');
});

app.get('/js/PageManager.js', function(req,res) {

  res.sendfile('static/js/PageManager.js');
});


app.get('/api/hostname', function(req, res) {
    res.send(os.hostname());
});

app.get('/api/requestno', function(req, res) {
console.log("here")
console.log("rew: " + requestNo)
    res.send(requestNo);
});



http.createServer(app).listen(1337, function() {
  //  var os = Os()
	console.log(os.hostname())

	console.log('Express started on port 1337');
});