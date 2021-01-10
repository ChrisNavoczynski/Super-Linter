function backgroundColor1() {
    var blue = document.getElementById("newColor");
    blue.style.backgroundColor = "royalblue";
}

function backgroundColor2() {
    var blue = document.getElementById("newColor");
    blue.style.backgroundColor = "mediumorchid";
}

function getTime() {
    var timeHere = document.getElementById('timeHere');
    fetch ("http://worldtimeapi.org/api/ip", {
        method: "GET",
    })
    .then((resp) => {
    console.log(resp);    
    resp.json().then(json => timeHere.innerText = json.datetime)})    
    
    .catch((err) => {
        console.error(err);
    })
}

function getZone() {
    var timeHere = document.getElementById('timeZone');
    fetch ("http://worldtimeapi.org/api/ip", {
        method: "GET",
    })
    .then((resp) => {
    console.log(resp);    
    resp.json().then(json => timeZone.innerText = json.timezone)})    
    
    .catch((err) => {
        console.error(err);
    })
}
