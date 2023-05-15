const btnSend = document.querySelector('.button_send');
const btnGeo = document.querySelector('.button_geo');
const field = document.querySelector('.field')
const message = document.querySelector('input');
let websocket;
function request(message) {
    let par = document.createElement('div');
    par.className = 'div_request';
    par.innerHTML = '<span>' + message + '</span>';
    field.appendChild(par)
}
function response(message) {
    let par = document.createElement('div');
    par.className = 'div_response';
    par.innerHTML = '<span>' + message + '</span>';
    field.appendChild(par)
}

window.onload = () => {
    websocket = new WebSocket('wss://echo-ws-service.herokuapp.com/');
    websocket.onopen = () => {
        console.log('connected');
    };
    websocket.onclose = () => {
        console.log('disconnected');
        websocket.onopen = () => {
            console.log('connected');
        }
    };
}
btnSend.addEventListener('click', () => {
    request(message.value);
    websocket.send(message.value);
    websocket.onmessage = (e) => {
        response(e.data)
    }
})
btnGeo.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition((position) => {
        websocket.send(position.coords);
        (function coordsResponse() {
            let par = document.createElement('div');
            par.className = 'div_request';
            par.innerHTML = `<a href="https://www.openstreetmap.org/#map=16/${position.coords.latitude}/${position.coords.longitude}" target="_blank" class="anchor_geolocation">Гео-локация</a>`;
            field.appendChild(par)
        })();
        websocket.onmessage = (e) => {
            return
        }
    })
})