# SillyString_RaspberryPi

In the following steps we will install the Raspberry Pi </br>
Operating System and Clone our Server

#### To set up Arduino and see project overview.
[Arduino](https://github.com/prichardsondev/SillyString_Arduino)

### Raspberry Pi OS
[Overview](https://www....com)

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

### Check PI's IP address
```
ip addr
Note you can also use piName:3000
e.g. http://prichardsontest:3000/
```

### Run your server
```
node app.js
```

### Browse to PI's IP Address
```
e.g. PIip:3000
Note you can also use piName:3000
http://prichardsontest:3000/ 
```

### Fun
```
Click the "Launch" button )
```

### To stop your sever
```
ctrl+c
```

### Launch Silly String From Anywhere

Sroll to section Install NginX & Test

Complete all steps from there on ...

[RaspberryPiServer](https://github.com/prichardsondev/RaspberryPiServer)