# SillyString_RaspberryPi

In the following steps we will install the Raspberry Pi </br>
Operating System and Clone our Server

### Raspberry Pi OS
[Video](https://www.placeholder.com)

[Raspberry PI Imager](https://www.raspberrypi.com/software/)

### Install NodeJS
[NodeJS](https://github.com/nodesource/distributions)
```
curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -

sudo apt-get install -y nodejs
```
### Install Git
```
sudo apt install git
```

### Clone SillyString_RaspberryPi Repository
```
git clone https://github.com/prichardsondev/SillyString_RaspberryPi.git
```

### Change to SillyString_RaspberryPi directory
```
cd SillyString_RaspberryPi
```

### Install dependencies
```
npm i
```

### Check PI IP address
```
ip addr
```

### Run your server
```
node app.js
```

### Browse to piIPAddress:3000
```
cd SillyString_RaspberryPi
```

### Fun
```
Click the "Launch" button )
```

### Stop your sever
```
ctrl+c
```

### Launch Silly String From Anywhere

Sroll to section Install NginX & Test

Complete all steps from there on ...

[RaspberryPiServer](https://github.com/prichardsondev/RaspberryPiServer)