var express = require('express');
var app     = express();
var port    = process.env.PORT || 8080;

app.get('/webhook', function(req, res) {
    res.send('Hello World!');  
});

app.listen(port);

console.log('Express server listening on port ' + port);