var socket = io();

function launch() {
    console.log('launch');
    socket.emit('launch');
}

socket.on('updateClient', data => {
    var temp = document.getElementById("temp");
    var distance = document.getElementById("distance");

    data = JSON.parse(data);
    temp.innerHTML =`${data.fahrenheit} &#8457;`;
    distance.innerHTML = `${data.inches}"`;

    // (data.lamp  === 0 ? (lamp.innerHTML = "Lamp Off", lamp.style.color = "#fff") :
    //     (lamp.innerHTML = "Lamp On", lamp.style.color = "#ffff00"));

    // (data.led === 0 ? (led.innerHTML = "LED Off", led.style.color = "#fff") :
    //     (led.innerHTML = "LED On", led.style.color = "#ffff00"));
});





