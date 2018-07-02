console.log('the callbacks lab');

// var resetbtn = document.querySelector('#reset');
// var startbtn = document.querySelector('#start');
// var pausebtn = document.querySelector('#pause');

// startbtn.addEventListener('click',startTime);
// pausebtn.addEventListener('click',pauseTime);
// resetbtn.addEventListener('click',stopTime);
// var second = 0;
// var timerId;

// function startTime(){
//     clearInterval(timerId);
//     timerId = setInterval(function() {
//         document.querySelector("#timer").textContent = second;
//     second +=1;
//     }, 1000);
// }

// function pauseTime(){
//     clearInterval(timerId);
// }

// function stopTime(){
//     clearInterval(timerId);
//     second = 0;
//     document.querySelector("#timer").textContent = 'Stop Watch'
// }


//bonus part --benefit???
var timer = {
    second: 0,
    timerId:undefined,
    startTime: function(){
        clearInterval(timer.timerId);
        timer.timerId = setInterval(function() {
            document.querySelector("#timer").textContent = timer.second;
        timer.second +=1;
        }, 1000);
    },
    
    pauseTime: function(){
        clearInterval(timer.timerId);
    },
    
    stopTime:function (){
        clearInterval(timer.timerId);
        timer.second = 0;
        document.querySelector("#timer").textContent = 'Stop Watch'
    },

}
document.querySelector('#reset').addEventListener('click',timer.stopTime);
document.querySelector('#start').addEventListener('click',timer.startTime);
document.querySelector('#pause').addEventListener('click',timer.pauseTime);
