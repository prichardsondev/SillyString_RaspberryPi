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
});





