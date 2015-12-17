"use strict";

$(document).ready(function() {

	console.log("JS file loaded!");

var currentPlayer = 1;
currentPlayer = currentPlayer %2;

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

alert("Player 1, you will be X. The computer will be O. When it's your turn, please click on the square you would like to place your symbols. Three in a row wins!");
alert("It's your turn!");

var humanMove = function() {
  $('.grid').on('click', function () {
  if ($(this).children().length === 0 ) {
    // click += 1;
    // if (click === 1 || click % 2 === 1) {
      $(this).html("<img src = 'x.gif' />");
      $(this).addClass("xClass");
    }
  else {
    alert("That box already has an element in it!");
    }
  })
}


var placeRandom = Math.floor(Math.random() * 9) + 1;
var chosenBox = "box" + placeRandom;

var computerMove = function() {
  almostWon();
}
  // chosenBox.html("<img src = 'crazyo.gif' />");
  // $(this).addClass("oClass");
//   var checkHuman === almostWon();
//     if !(almostWon)
//   }
//   else {
//     $('location').html(Opiece);

//   }
//   }

// winningCombos.forEach(function(combo) {
// //try to find either an empty winning combo or block the
// })
 // can human win next turn?

var almostWon = function() {
  winningComnos.forEach(function(combo) {
    var comboCheck = 0;
    var blanks = 0;
    var target;
    combo.forEach(function(square) {
        if (square.hasClass("xClass") < 2 ) {
            comboCheck++;
      } else {
          var blank = !(square.hasClass("xClass")); 
            blank.html("<img src = 'crazyo.gif' />");
        }
      })
    if (comboCheck === 2 && blank === 1) {
      return blank;
    } else {
    return false;
  }
})
}

//   // if (box1.hasClass('xClass') && box2.hasClass('xClass')) {
//   //       box3.html("<img src = 'crazyo.gif' />");
//       }
//   }
// }


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

var checkIfWon = function() {
  if ( box1.hasClass("xClass") && box2.hasClass("xClass") && box3.hasClass("xClass")) {
    player1wins();
  }
  else if ( box4.hasClass("xClass") && box5.hasClass("xClass") && box6.hasClass("xClass")) {
    player1wins();
  }
  else if ( box7.hasClass("xClass") && box8.hasClass("xClass") && box9.hasClass("xClass")) {
    player1wins();
  }
  else if ( box1.hasClass("xClass") && box7.hasClass("xClass") && box7.hasClass("xClass")) {
    player1wins();
  }
  else if ( box2.hasClass("xClass") && box5.hasClass("xClass") && box8.hasClass("xClass")) {
    player1wins();
  }
  else if ( box3.hasClass("xClass") && box6.hasClass("xClass") && box9.hasClass("xClass")) {
    player1wins();
  }
  else if ( box1.hasClass("xClass") && box5.hasClass("xClass") && box9.hasClass("xClass")) {
    player1wins();
  }
  else if ( box3.hasClass("xClass") && box5.hasClass("xClass") && box7.hasClass("xClass")) {
    player1wins();
  }
  else if ( box1.hasClass("oClass") && box2.hasClass("oClass") && box3.hasClass("oClass")) {
    player2wins();
  }
  else if ( box4.hasClass("oClass") && box5.hasClass("oClass") && box6.hasClass("oClass")) {
    player2wins();
  }
  else if ( box7.hasClass("oClass") && box8.hasClass("oClass") && box9.hasClass("oClass")) {
    player2wins();
  }
  else if ( box1.hasClass("oClass") && box7.hasClass("oClass") && box7.hasClass("oClass")) {
    player2wins();
  }
  else if ( box2.hasClass("oClass") && box5.hasClass("oClass") && box8.hasClass("oClass")) {
    player2wins();
  }
  else if ( box3.hasClass("oClass") && box6.hasClass("oClass") && box9.hasClass("oClass")) {
    player2wins();
  }
  else if ( box1.hasClass("oClass") && box5.hasClass("oClass") && box9.hasClass("oClass")) {
    player2wins();
  }
  else if ( box3.hasClass("oClass") && box5.hasClass("oClass") && box7.hasClass("oClass")) {
    player2wins();
  }
}

var run = function() {
  humanMove();
  checkIfWon();
  computerMove();
  checkIfWon();
}

run();

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


});
















// })();