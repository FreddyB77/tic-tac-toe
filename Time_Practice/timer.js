console.log("loaded!");


        var clock = 10;
        var countdownId = 0;

        function start() {
            //Start clock
            countdownId = setInterval("countdown()", 1000);
        }

        function countdown(){
            if(clock > 0){
                clock = clock - 1;
                $('#cdDiv').innerHTML = clock;
            }
            else {
                //Stop clock
                clearInterval(countdownId);
            }
        }


// / var timer = (function() {
// //     var basePeriod = 1000;
//     var currentSpeed = 1;
//     var timerElement;
//     var timeoutRef;
//     var count = 0;

//     return {
//       start : function(speed, id) {
//         if (speed >= 0) {
//           currentSpeed = speed;
//         }
//         if (id) {
//           timerElement = document.getElementById(id);
//         }
//         timer.run();
//       },

//       run: function() {
//         if (timeoutRef) clearInterval(timeoutRef);
//         if (timerElement) {
//           timerElement.innerHTML = count;
//         }
//         if (currentSpeed) {
//           timeoutRef = setTimeout(timer.run, basePeriod/currentSpeed);
//         }
//         ++count;
//       },

//       setSpeed: function(speed) {
//         currentSpeed = +speed;
//         timer.run();
//       }
//     }

// }());

// window.onload = function(){timer.start(10, 'timer');};


// console.log("Timer.js loaded!");

// var Timer;
// var TotalSeconds;


// function CreateTimer(TimerID, Time) {
// Timer = document.getElementById(TimerID);
// TotalSeconds = Time;

// UpdateTimer()
// window.setTimeout("Tick()", 1000);
// }

// function Tick() {
// 	if(TotalSeconds <= 0) {
// 		alert("Time's Up!");
// 		return;
// 	}

// TotalSeconds -= 1;
// UpdateTimer()
// window.setTimeout("Tick()", 1000);
// }

// function UpdateTimer() {
// var Seconds = TotalSeconds;

// var Days = Math.floor(Seconds / 86400);
// Seconds -= Days * 86400;

// var Hours = Math.floor(Seconds / 3600);
// Seconds -= Hours * (3600);

// var Minutes = Math.floor(Seconds / 60);
// Seconds -= Minutes * (60);


// var TimeStr = ((Days > 0) ? Days + " days " : "") + LeadingZero(Hours) + ":" + LeadingZero(Minutes) + ":" + LeadingZero(Seconds)


// Timer.innerHTML = TimeStr;
// }

// function LeadingZero(Time) {

// return (Time < 10) ? "0" + Time : + Time;
