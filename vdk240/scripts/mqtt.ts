import mqtt from "mqtt/dist/mqtt"

// mqtt
let port = 9001;
var host = document.location.hostname;
console.log("Try to connect to " + host + ":" + port);
var BrokerURL: string = 'ws://' + host + ':' + port;
let client: mqtt.MqttClient = mqtt.connect(BrokerURL)

client.on('connect', () => {
    console.log("Connected to MQTT broker!");
    client.publish('Hello',"Hello from ASP.NET");
});


function wrapMessage() {
    const btn = document.querySelector('input[name="btnradio"]:checked') as HTMLInputElement;
    sendMessage(slider.value, btn.value);
}
function sendMessage(_speed: string, _level: string) {
    var topic = 'fromJs'
    var data = {
        speed: _speed,
        level: _level
    };
    var message = JSON.stringify(data)

    console.log(message);

    client.publish(topic, message)
}

// Attach the form submission event listener


const slider = document.getElementById("range-slider") as HTMLInputElement;
if (slider) {
    slider.onmouseup = function () {
        wrapMessage();
    }
}

const btnRadios = document.querySelectorAll('input[name="btnradio"]');
if (btnRadios) {
    btnRadios.forEach(btnRadio => {
        btnRadio.addEventListener('change', handleGroupBtn);
    });
}


function handleGroupBtn() {
    wrapMessage();
}

console.log("..")

