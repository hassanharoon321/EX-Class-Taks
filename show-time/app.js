var time = document.getElementById("time");
var timeFormat = "AM";
var interval;

function timeStart() {
    interval = setInterval(function () {
        var hours = new Date().getHours();
        if (hours > 12) {
            hours = hours % 12;
        }
        if(hours>=12){
            timeFormat = "PM"
        }
        
        //  10
        var currentHours = ("0" + hours).slice(-2)
        var minutes = new Date().getMinutes();
        var currentMinutes = ("0" + minutes).slice(-2)
        var seconds = new Date().getSeconds();
        var currentSeconds = ("0" + seconds).slice(-2)
        var programTime = currentHours + " : " + currentMinutes + " : " + currentSeconds + " " + timeFormat;
        time.innerHTML = programTime;
    }, 1000)
}

function timeStop() {
    clearInterval(interval);
}


// var time =document.getElementById("time")
// if (time.style.display === "none") {
//     time.style.display = "block";
// } else {
//     time.style.display = "none";
// }

// setInterval(function timeStart(){
//     var hours = new Date().getHours();
//     if (hours > 12) {
//         hours = hours % 12
//     }
//     var currentHours = ("0" + hours).slice(-2)
//     var minutes = new Date().getMinutes();
//     var currentMinutes = ("0" + minutes).slice(-2)
//     var seconds = new Date().getSeconds();
//     var currentSeconds = ("0" + seconds).slice(-2)


//     var programTime = currentHours + " : " + currentMinutes + " : " + currentSeconds;
//     // var time =document.getElementById("time")
//     // if (time.style.display === "none") {
//     //     time.style.display = "block";
//     // } else {
//     //     time.style.display = "none";
//     // }
//     console.log(programTime)

//     time.innerHTML = programTime
// }, 1000)



// function timeStart() {

//     var hours = new Date().getHours();
//     var minutes = new Date().getMinutes();
//     var seconds = new Date().getSeconds();


//     var programTime = hours + " : " + minutes + " : " + seconds;
//     document.getElementById("time").innerHTML = programTime;

// }



// function call() {
//     console.log("before")
//     setTimeout(function () {
//         console.log("Inside Timeout")
//     }, 2000)//check on zero as well
//     console.log("after")
    //call stack, web api, event loop, callback queue
    //event loop model check on google 
// }


// setInterval(function(){
//     console.log("hello")
// },1000)
//calls every time