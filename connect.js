const { SerialPort } = require('serialport');

const targetPortName = "Arduino";

const targetPortExists = port => port.manufacturer.includes(targetPortName);

const connect = async () => {

  try {

    const ports = await SerialPort.list();
    const targetPort = ports.find(targetPortExists);

    if (targetPort) {      
      serialConnection = new SerialPort({
        path: targetPort.path,
        baudRate: 9600
      });
     
      return serialConnection;

    } else {
      console.log('Target USB port not found.');
    }
  }
  catch (err) {
    console.error(`Error fetching serial ports: ${err.message}`);
  }

};

exports.connect = connect;
