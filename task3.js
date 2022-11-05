const wsUrl = 'wss://echo-ws-service.herokuapp.com';

const btnSend = document.querySelector('.send');
const btnGeo = document.querySelector('.geo');
const input = document.querySelector('.chat__input');
const dialog = document.querySelector('.chat__dialogs');

let websocket = new WebSocket(wsUrl);

function writeMessage(message) {
    dialog.innerHTML += `<p class="chat__message client">${message}</p>`
    websocket.send(message);
    websocket.onmessage = function (evt) {
        dialog.innerHTML += `<p class="chat__message server">${evt.data}</p>`
    };
}

btnSend.addEventListener('click', () => {
    writeMessage(input.value);
    input.value = '';
})

function error() {
    dialog.innerHTML += '<p class="chat__message client">Невозможно получить ваше местоположение</p>';
}

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    dialog.innerHTML += `<a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}" target="_blank" class="chat__message client">Гео-локация</p>`
}

btnGeo.addEventListener('click', () => {
    if (!navigator.geolocation) {
        dialog.innerHTML += '<p class="chat__message client">Geolocation не поддерживается вашим браузером</p>';
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
});