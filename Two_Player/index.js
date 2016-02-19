"use strict";

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

//In the future I would like to get this timer function to work.
var clockStart = 10;
var clockEnd = function() {
  setInterval(countdown, 1000);
}


alert("Player 1 will be X. Player 2 will be O. Taking turns, please click on the square you would like to place your symbols. Three in a row wins!");
alert("It's Player 1's turn!");

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
  if (click === 9) {
    alert("It's a draw! No one has won!");
    location.reload();
  }
}
var song = new Audio("starwars-c_kjllrden.mp3");
