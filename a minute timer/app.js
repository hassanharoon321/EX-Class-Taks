// 2) 1 Minute Timer (better to get input from user & make timer according to that)

var hours = document.getElementById("hours").value;
var minutes = document.getElementById("minutes").value;
var seconds = document.getElementById("seconds").value;
var timerShow = document.getElementById("timerShow");

var convertHours = parseInt(hours);
var convertMinutes = parseInt(minutes);
var convertSeconds = parseInt(seconds);

function setTime() {
    timerShow.innerHTML = convertHours + " : " + convertMinutes + " : " + convertSeconds;
}

function start() {

}

function stop() {

}

function reset() {
    timerShow.innerHTML = "00 : 00 : 00"
}