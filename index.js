"use strict";

// $(document).ready(function() {

	console.log("JS file loaded!");


//essentially, this is an array of arrays
var board = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

var click = 0;

//here, I assigned the divs from the HTML code into the nested board array, then assigned it to my own variable

board[0][0] = $('.one');
var box1 = $('.one');

board[0][1] = $('.two');
var box2 = $('.two');

board [0][2] = $('.three');
var box3 = $('.three')

board[1][0] = $('.four');
var box4 = $('.four');

board [1][1] = $('.five');
var box5 = $('.five');

board [1][2] = $('.six');
var box6 = $('.six');

board [2][0] = $('.seven');
var box7 = $('.seven');

board [2][1] = $('.eight');
var box8 = $('.eight');

board [2][2] = $('.nine');
var box9 = $('.nine')

//this is just a nested array to remind me which combos win
var winningCombos = [
[box1, box2, box3], 
[box4, box5, box6], 
[box7, box8, box9],
[box1, box4, box7],
[box2, box5, box8],
[box3, box6, box9],
[box1, box5, box9],
[box3, box5, box7]
];

// I tried to write a function that allowed JS to 
// if (winningCombos[i].className === "xClass") {
// 	alert("Player 1 has won!!!!");
// 	}
// else if (winningCombos[i].className === "oClass") {
// 	alert("Player 2 has won!!!!");
// }
// var winCheck = function() {
// // 	for (var i = 0; i < winningCombos.length; i++) {
// // 		for (var j = 0; j <winningCombos[i].length; j++) {
// // 			console.log(winningCombos[i][j]);
// // 		}
// // 	}
// // }
// 	if (winningCombos[0].hasClass("xClass") === true) {
// 	alert("Player 1 has won!");
// 	}
// }

// winCheck();
    // var clock = 10;
    // var countdownId = 0;

    //   function start() {
    //         //Start clock
    //         countdownId = setInterval(countdown, 1000);
    //     }

    //     function countdown(){
    //         if(clock > 0){
    //             clock = clock - 1;
    //             $('#timer').html(clock);
    //         }
    //         else {
    //             //Stop clock
    //             clearInterval(countdownId);
    //         }
    //     }

var clockStart = 10;
var clockEnd = function() {
  setInterval(countdown, 1000);
}
  
// var start = function() {
//   if (clockStart === 0) {
//     alert("You took too long to put in your answer! GAME OVER!");
//     }
//     else {
//       countdown();
//     }
//   }

// var countdown = function() {
//   if (click) {
//   clearInterval(clockEnd);
//     }
//     else if (clockStart > 0) {
//     clockStart = clockStart - 1;
//     $('#timer').html(clockStart);
//     }
// }

alert("Player 1 will be X. Player 2 will be O. Taking turns, please click on the square you would like to place your symbols. Three in a row wins!");
alert("It's Player 1's turn!");
// start();

//the main issue I keep running into is that whenever I add X on a div, both an xClass and an oClass are added.

//I kind of believe that there's a better way to take turns than this...

//here is an alternate solution for getting the X and O's on there.

$('.grid').on('click', function () {
  if ($(this).children().length === 0 ) {
    click += 1;
    if (click === 1) {
      $(this).html("<img src = 'pinkcloudx.gif' />");
      $(this).addClass("xClass");
    }
    else if (click % 2 === 1 ) {
      $(this).html("<img src = 'pinkcloudx.gif' />");
      $(this).addClass("xClass");
    }
    else {
      $(this).html("<img src = 'spino.gif' />");
      $(this).addClass("oClass");
    }
  }
  else {
    alert("That box already has an element in it!");
    }
  checkIfWon();
  checkIfDraw();
  })

var player1wins = function() {
  song.play();
  alert("Player 1 wins!");
  location.reload();
}

var player2wins = function() {
  song.play();
  alert("Player 2 wins!");
  location.reload();
}

  // var currentPlayer = (whoever's turn it is)

  // $(".oClass").hasClass("two") && $(".oClass").hasClass("three")
  var winningCombos = [
[box1, box2, box3], 
[box4, box5, box6], 
[box7, box8, box9],
[box1, box4, box7],
[box2, box5, box8],
[box3, box6, box9],
[box1, box5, box9],
[box3, box5, box7]
];

  // box1.on("click", function() {
  //   var thisClass = $(this).attr("class").split(" ")[2]
  //   if ((box2.hasClass(thisClass)) && (box3.hasClass(thisClass))) ||

  //    {

  //     // this player wins

  //   }
  // })


  // SOMETHING LIKE:
  // winningCombos.forEach(function(winCombo){

  // })

var checkIfWon = function() {
  var horizontalWin = function() {
    if ( box1.hasClass("xClass") && box2.hasClass("xClass") && box3.hasClass("xClass")) {
    player1wins(); 
  }
    else if ( box1.hasClass("oClass") && box2.hasClass("oClass") && box3.hasClass("oClass")) {
    player2wins();
  }
    else if ( box4.hasClass("xClass") && box5.hasClass("xClass") && box6.hasClass("xClass")) {
    player1wins(); 
  }
    else if ( box4.hasClass("oClass") && box5.hasClass("oClass") && box6.hasClass("oClass")) {
    player2wins(); 
  }
    else if ( box7.hasClass("xClass") && box8.hasClass("xClass") && box9.hasClass("xClass")) {
    player1wins(); 
  }
    else if ( box7.hasClass("oClass") && box8.hasClass("oClass") && box9.hasClass("oClass")) {
    player2wins(); 
  }
}
  var verticalWin = function() {
    if ( box1.hasClass("xClass") && box4.hasClass("xClass") && box7.hasClass("xClass")) {
    player1wins(); 
  }
    else if ( box1.hasClass("oClass") && box4.hasClass("oClass") && box7.hasClass("oClass")) {
    player2wins();
  }
    else if ( box2.hasClass("xClass") && box5.hasClass("xClass") && box8.hasClass("xClass")) {
    player1wins();
  }
    else if ( box2.hasClass("oClass") && box5.hasClass("oClass") && box8.hasClass("oClass")) {
    player2wins();
  }
    else if ( box3.hasClass("xClass") && box6.hasClass("xClass") && box9.hasClass("xClass")) {
    player1wins();
  }
    else if ( box3.hasClass("oClass") && box6.hasClass("oClass") && box9.hasClass("oClass")) {
    player2wins();
  }
}
var diagonalWin = function() {
  if ( box1.hasClass("xClass") && box5.hasClass("xClass") && box9.hasClass("xClass")) {
    player1wins(); 
  }
  else if( box1.hasClass("oClass") && box5.hasClass("oClass") && box9.hasClass("oClass")) {
    player2wins(); 
  }
  else if ( box3.hasClass("xClass") && box5.hasClass("xClass") && box7.hasClass("xClass")) {
    player1wins(); 
  }
  else if ( box3.hasClass("oClass") && box5.hasClass("oClass") && box7.hasClass("oClass")) {
    player2wins(); 
  }
}
horizontalWin();
verticalWin();
diagonalWin();
}

var checkIfDraw = function() {
  if (click === 9 && checkIfWon === false) {
    alert("It's a draw! No one has won!");
    location.reload();
  }
}
var song = new Audio("starwars-c_kjllrden.mp3");

// I tried to write a function that allowed JS to iterate through the winningCombos arrray, I ended up not using it
// if (winningCombos[i].className === "xClass") {
//  alert("Player 1 has won!!!!");
//  }
// else if (winningCombos[i].className === "oClass") {
//  alert("Player 2 has won!!!!");
// }
// var winCheck = function() {
// //   for (var i = 0; i < winningCombos.length; i++) {
// //     for (var j = 0; j <winningCombos[i].length; j++) {
// //       console.log(winningCombos[i][j]);
// //     }
// //   }
// // }
//  if (winningCombos[0].hasClass("xClass") === true) {
//  alert("Player 1 has won!");
//  }
// }



//from Stack Overflow, this might be able to check if any three divs have the same class xClass
// if ($('.grid').hasClass("xClass").length == 3) {
//             console.log("same");
//           }
//this is the solution I was using before, which works. I'll try to find a more succint solution...
// $('.grid').on('click', function () {
// 	if ($(this).children().length === 0 ) {
// 		click += 1;
// 		if (click === 1 ) {
// 			$(this).html("<img src = 'x.gif' />");
// 			$(this).addClass("xClass");
// 		}
// 		else {
// 			$(this).html("<img src = 'crazyo.gif' />");
// 		} 	$(this).addClass("oClass");
// 	}
// 	else {
// 		alert("That box already has an element in it!");
// 		}
// 	})

//another response from stack overflow gave this suggestion, which is actually pretty good, if it works
// function checkIfWon(symbol) {
//     for (var i = 0; i < winningCombos.length; i++) {
//         var hits = 0;
//         for (var j = 0; j < 3; j++) {
//            if (winningCombos[i][j].hasClass("xClass")) {
//             alert("Player 2 wins!");
//             hits++;
//            } else {
//                break; // no need to check this combo on
//            }
//         }
//         if (hits === 3) {
//             // we got a winning combo!
//             return true;
//         } else {
//           return false;
//         }
//       }
//     }

//Time to write an AI function
// AI
//choose symbol with confirm box with var humanPlayer, compPlayer
//startGame(humanPlayer, computerPlayer);
//make a function for each object (makeMove

//   var humanPlayer = {
//      makeMove: function() {
//        var
//     },
// board[x] = currentPlayer
//   })

// });
















// })();