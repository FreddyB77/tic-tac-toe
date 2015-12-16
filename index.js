"use strict";

// $(document).ready(function() {

	console.log("JS file loaded!");

// alert("Welcome to Angela's Tic-Tac-Toe game!");
// prompt("Would you like to be X or O?");	

//essentially, this is an array of arrays
var board = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

var click = 0;
 if (click % 2 === 1) {
 	turnX();
 }

//write an equation to replace these numbers with X or O 
//if the arrays equal each other, someone wins

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



//I need to write a function that records if all three items if any of the winning combo arrays switched to the same class.
//If any of the winningCombos arrays are all either xClass or oClass, game ends.

// 	if (winningCombos[i].children().className === "xClass") {
// 		alert("Player 1 has won!");
// 	}
// }

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

alert("Player 1 will be X. Player 2 will be O. Taking turns, please click on the square you would like to place your symbols. Three in a row wins!");
alert("It's Player 1's turn!");

//I also need to write a function that lets the players take turns
// var takeTurn = function() {
// 	turnX();
// 	turnO();
// }


$('.grid').on('click', function () {
	if ($(this).children().length === 0 ) {
		click += 1;
		if (click % 2 === 1 ) {
			$(this).html("<img src = 'x.gif' />");
			$(this).addClass("xClass");
		}
		else {
			$(this).html("<img src = 'crazyo.gif' />");
		} 	$(this).addClass("oClass");
	}
	else {
		alert("That box already has an element in it!");
		}
	})

//original JS for turnO
// var turnO = function() {
// 	$('.grid').on('click', function () {
// 	if ($(this).children().length === 0 ) {
// 			$(this).html("<img src = 'o.gif' />");
// 			$(this).addClass("oClass");
// 		}
// 	else {
// 		alert("That box already has an element in it!");
// 		}
// 	})
// }

//original JS for turnX
// var turnX = function() {
// 	$('.grid').on('click', function () {
// 	if ($(this).children().length === 0 ) {
// 			$(this).html("<img src = 'x.gif' />");
// 			$(this).addClass("xClass");
// 		}
// 	else {
// 		alert("That box already has an element in it!");
// 		}
// 	})





















// })();