

setInterval(function timeStart() {
    var hours = new Date().getHours();
var minutes = new Date().getMinutes();
var seconds = new Date().getSeconds();
    var programTime = hours + " : " + minutes + " : " + seconds;
    document.getElementById("time").innerHTML = programTime;
}, 1000)



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