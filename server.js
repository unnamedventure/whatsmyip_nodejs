var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Your IP is: ' + req.ip);
});

var port = 3010;
app.listen(port);
console.log('Listening on port '+port);