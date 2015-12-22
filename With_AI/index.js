"use strict";

$(document).ready(function() {

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

alert("Player 1, you will be X. The computer will be O. When it's your turn, please click on the square you would like to place your symbols. Three in a row wins!");
alert("It's your turn!");

var humanMove = function() {
  $('.grid').on('click', function () {
    checkIfWon();
    checkIfDraw();
    // almostWon();
  if ($(this).children().length === 0 ) {
    // click += 1;
    // if (click === 1 || click % 2 === 1) {
      $(this).html("<img src = 'x.gif' />");
      $(this).addClass("xClass");
      setTimeout(computerMove,500);
    }
  else {
    alert("That box already has an element in it!");
    }
  })
}


// this checks whether the board is full or not
var boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
var boardFull = function(){
  for (var i=0; i<boxArray.length; i++){
    if (boxArray[i].children().length === 0){
      return false;
    }
  }

  return true;
}
var computerMove = function() {
    checkIfWon();
    checkIfDraw();
    console.log("making new move")
    // we just rewrote the almostWon function to do its own jquery appending
    //therefore, maybe we need to test for whether it needs to fire?
    
  // if (almostWon() === false) {
    var boardCheck = boardFull();
    if (boardCheck){
      console.log('Board is full!')
      return;
    } else {
      console.log("I moved")
      var blockMove = almostWonMove();
      console.log(blockMove)

      if (blockMove !== false) {
        console.log("blocking");
        addOClass(blockMove);
        checkIfWon();
        checkIfDraw();
      } else {
        console.log("made random move")
        randCompMove();
        checkIfWon();
        checkIfDraw();
      }
    }
} 


// we're going to make randomMove it's own function

var randCompMove = function() {
    var randomMove = Math.floor(Math.random() * 8) + 1;
    var boxToCheck = boxArray[randomMove];
    if (boxToCheck.children().length > 0) {
        console.log("boardcheck: ", boardFull());
        randCompMove();
    } else {
        addOClass(boxToCheck)
    }
  }

var addOClass = function(box) {
  box.html("<img src = 'crazyo.gif' />");
  box.addClass("oClass");
}

var almostWonMove = function() {
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

    var potentialCombos = []

    $(".xClass").each(function(square){
        console.log("found xClass")

        var match = $(".xClass")[0]

        winningCombos.forEach(function(combo){
          console.log(combo)
          debugger
          // this is nick forgetting how javascript works
          // it loses track of the variable through the loop, because of assignments
          if(combo.indexOf(match) > 0){
            potentialCombos.push(combo);
            console.log(potentialCombos);
          }
        })
    })

    return false
}

//Nick and I worked very hard to try to find a function that would iterate through my winningCombos to produce an AI with actual strategy, but we couldn't quite get to it
    // winningCombos.forEach(function(square) {
    //     var xClassArr = square;

    //     console.log("testing new combo")

    //     var winningCombo = []

    //     square.forEach(function(combobox) {          
  
    //       // console.log(combobox)          
    //       if (combobox.hasClass("xClass") == true) {
    //           winningCombo.push(combobox)
    //       }

    //       console.log(winningCombo)

    //       if (winningCombo.length == 2) {
    //         var firstIndex = square.indexOf(winningCombo[0])
    //         xClassArr.splice(firstIndex, 1)
    //         var secondIndex = xClassArr.indexOf(winningCombo[1])
    //         xClassArr.splice(secondIndex, 1)

    //         return xClassArr[0]
    //         // filter the square for the value that doesn't match and return that one
    //       }
    //     })

    // })

//   return false

// }

// else { 
//           blank.html("<img src = 'crazyo.gif' />");
//         }
//       })
//     if (comboCheck === 2 && blank === 1) {
//       return blank;
//     } else {
//     return false;
//   }
//   checkIfWon();
//   checkIfDraw();
// })
// }

//here is the Win function
var horizontalWin = function() {
    if ( box1.hasClass("xClass") && box2.hasClass("xClass") && box3.hasClass("xClass")) {
    return player1wins(); 
  }
    else if ( box1.hasClass("oClass") && box2.hasClass("oClass") && box3.hasClass("oClass")) {
    return player2wins();
  }
    else if ( box4.hasClass("xClass") && box5.hasClass("xClass") && box6.hasClass("xClass")) {
    return player1wins(); 
  }
    else if ( box4.hasClass("oClass") && box5.hasClass("oClass") && box6.hasClass("oClass")) {
    return player2wins(); 
  }
    else if ( box7.hasClass("xClass") && box8.hasClass("xClass") && box9.hasClass("xClass")) {
    return player1wins(); 
  }
    else if ( box7.hasClass("oClass") && box8.hasClass("oClass") && box9.hasClass("oClass")) {
    return player2wins(); 
  }
  return false;
}
var verticalWin = function() {
    if ( box1.hasClass("xClass") && box4.hasClass("xClass") && box7.hasClass("xClass")) {
    return player1wins(); 
  }
    else if ( box1.hasClass("oClass") && box4.hasClass("oClass") && box7.hasClass("oClass")) {
    return player2wins();
  }
    else if ( box2.hasClass("xClass") && box5.hasClass("xClass") && box8.hasClass("xClass")) {
   return  player1wins();
  }
    else if ( box2.hasClass("oClass") && box5.hasClass("oClass") && box8.hasClass("oClass")) {
    return player2wins();
  }
    else if ( box3.hasClass("xClass") && box6.hasClass("xClass") && box9.hasClass("xClass")) {
    return player1wins();
  }
    else if ( box3.hasClass("oClass") && box6.hasClass("oClass") && box9.hasClass("oClass")) {
    return player2wins();
  }
  return false;
}
var diagonalWin = function() {
  if ( box1.hasClass("xClass") && box5.hasClass("xClass") && box9.hasClass("xClass")) {
    return player1wins(); 
  }
  else if( box1.hasClass("oClass") && box5.hasClass("oClass") && box9.hasClass("oClass")) {
    return player2wins(); 
  }
  else if ( box3.hasClass("xClass") && box5.hasClass("xClass") && box7.hasClass("xClass")) {
    return player1wins(); 
  }
  else if ( box3.hasClass("oClass") && box5.hasClass("oClass") && box7.hasClass("oClass")) {
    return player2wins(); 
  }
  return false;
}

var checkIfWon = function() {
  
  if(horizontalWin() || verticalWin() || diagonalWin()){
    location.reload()
  }
}

// var checkIfDraw = function() {
//   if (click === 5) {
//     alert("It's a draw! No one has won!");
//     location.reload();
//   }
// }

var player1wins = function() {
  song.play();
  alert("Player 1 wins!");
  //location.reload();
  return true;
}

var player2wins = function() {
  song.play();
  alert("Computer wins!");
  //location.reload();
  return true;
}

var checkIfDraw = function() {
  if ( box1.children().length > 0 && box2.children().length > 0 && box3.children().length > 0 && box4.children().length > 0 && box5.children().length > 0 && box6.children().length > 0 && box7.children().length > 0 && box8.children().length > 0 && box9.children().length > 0 ) {
    checkIfWon();
      if (checkIfWon === false) {
        alert("It's a draw! No one wins!");
      }
    }
  } 

var run = function() {
    humanMove();
    //computerMove();
    //checkIfWon();
    // checkIfDraw();
}

run();

var song = new Audio("starwars-c_kjllrden.mp3");



















});
















// })();