var stopwatch = document.getElementById("stopwatch");
var getLaps = document.getElementById("getLaps");

var timerun;
var hours = 0;
var min = 0;
var sec = 0;

var h, m, s;

function start() {
    timerun = setInterval(function () {
        sec++;
        if (sec >= 60) {
            sec = 0;
            sec++;
            min++
        }
        if (min >= 60) {
            min = 0;
            min++;
            hours++
        }

        h = hours.toString();
        m = min.toString();
        s = sec.toString();

        s.length <= 1 ? s = "0" + sec : console.log("error seconds");
        m.length <= 1 ? m = "0" + min : console.log("error minute");
        h.length <= 1 ? h = "0" + hours : console.log("error seconds");

        stopwatch.innerHTML = h + " : " + m + " : " + s;

    }, 1000)

}

function pause() {
    clearInterval(timerun);

}


function lap() {
    var time = `${h} : ${m} : ${s}`
    var li = document.createElement("li");
    var liText = document.createTextNode(time);
    li.appendChild(liText);

    getLaps.appendChild(li);

}


function reset() {
    clearInterval(timerun);
    stopwatch.innerHTML = "00" + " : " + "00" + " : " + "00";
    hours = 0;
    min = 0;
    sec = 0;
    getLaps.remove()
}