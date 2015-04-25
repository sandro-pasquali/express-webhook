var express = require('express');
var app     = express();
var port    = process.env.PORT || 8082;

// Dummy to test the server.
//
app.get('/', function(req, res) {
    res.send('Hello World!');  
});

app.get('/webhook', function(req, res) {
  // do something here 
});

app.listen(port);

console.log('Express server listening on port ' + port);
