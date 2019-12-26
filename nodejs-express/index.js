var express = require('express');
var app = express();

app.get('/', function (req, res){
  res.send('Hello TimesofCloud! v0.0.1');
});

Var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('Getting started nodejs express app listening at http://%s:%s', host, port);
});

