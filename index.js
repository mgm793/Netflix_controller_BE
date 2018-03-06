var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);

var ActualClient = null;

app.get('/play', function(req, res,next) {  
    ActualClient.emit("play");
    res.send("Done");
});

app.get('/pause', function(req,res,next){
    ActualClient.emit("pause");
    res.send("Done");
});

app.get('/skip', function(req,res,next){
    ActualClient.emit("skip");
    res.send("Done");
});

server.listen(8080, () =>{
    console.log('listening on *:8080');
});  

io.on('connection', function(client) {  
    console.log('Client connected...');
    ActualClient = client;
});

