const main = async _ => {

  const express = require('express');
  const app = express();

  const {connect} = require('./connect');

  const http = require('http').createServer(app);
  const io = require('socket.io')(http);

  const serverport = 3000;

  const path = require('path');
  const { ReadlineParser } = require('serialport');

  const port = await connect();
  const parser = new ReadlineParser();
  port.pipe(parser);

  port.on('open', () => console.log("Serial port open"));
  
  parser.on('data', data => {
    //console.log(data);
    io.sockets.emit('updateClient', data);
  });

  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/js', express.static(path.join(__dirname, '/node_modules/socket.io-client/dist')));

  app.get('/', (req, res) => {
    res.sendFile('index.html');
  });

  const launch = () => {
    port.write("launch\n", (err) => {
      if (err) console.log(err);
      //console.log("app lanuch");
    })
  }

  io.on('connection', (socket) => {
    //received from client (index.html)
    socket.on('launch', () => {
      //console.log("iolaunch");
      launch();
    });
  });

  http.listen(3000, () => {
    console.log(`Browse to http://localhost:${serverport}`);
  });

}

main();


