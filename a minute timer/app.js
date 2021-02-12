var timerShow = document.getElementById("timerShow");

var minutesEl = document.getElementById("minutesEl");
var minutesValue;
var minutesInInt;
function setTimeEl() {
    minutesValue = minutesEl.value;
    minutesInInt = Number(minutesValue);
    timerShow.innerHTML = `${minutesInInt} : 00`;
}

var straightTime;
var time;
var hello;

function start() {
    straightTime = minutesInInt;
    time = straightTime * 60;
    
    hello = setInterval(function () {
        var minutes = Math.floor(time / 60);
        var seconds = time % 60

        seconds = (seconds < 10) ? "0" + seconds : seconds;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        timerShow.innerHTML = `${minutes} : ${seconds}`;
        time--
        console.log(minutes)
        console.log(seconds)
    }, 1000)
}


function stop() {
    clearInterval(hello)

}

function reset() {
    clearInterval(hello);
    timerShow.innerHTML = "00 : 00";
}


