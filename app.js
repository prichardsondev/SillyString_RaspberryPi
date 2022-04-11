var express = require('express');
var app = express();

var http = require('http').createServer(app);
var io = require('socket.io')(http);

var path = require('path');
const SerialPort = require('serialport');

// ls /dev/tty* to check port arduino connected to
const port = new SerialPort("/dev/ttyUSB0", {baudRate: 9600});

port.on('open', () => console.log("Serial port open"));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/socket.io-client/dist')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

const launch = () => {
    port.write("launch", (err) => {
        if(err) console.log(err);
    })
}

io.on('connection', (socket) => {
    //received from client (index.html)
    socket.on('launch', () => {
        launch();
    });
});

http.listen(3000, () => {
  console.log('listening on port 3000');
});