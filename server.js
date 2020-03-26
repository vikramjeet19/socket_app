var app = require('express')();
var server = require("http").Server(app);
var io = require("socket.io").listen(server);

server.listen(process.env.PORT || 3000);
console.log("Server running...");
app.get('/', function (req, res) {
    res.sendFile((__dirname + '/index.html'));
});

io.sockets.on('connection', function () {
    console.log('Connected:  socket connected');
    socket.on('disconnect', function () {
        console.log('Disconnected:  socket disconnected')
    });
    socket.on('receive message', function (data) {
        console.log(data);
        io.sockets.emit('new message', { msg: data, user: socket.username });
    });
});

