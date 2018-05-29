// Creating my variables
var wins = 0;
var losses = 0;
var ourTotal = 0;
var redbutton = 0;
var bluebutton = 0;
var yellowbutton = 0;
var greenbuttton = 0;
var myRandomNumber = 0;
var anotherRandomNumber = 0;


var myRandomNumber = Math.floor(Math.random() * 2);
console.log(myRandomNumber);

var red = document.getElementById("red");
var blue = document.getElementById("blue");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");

var anotherRandomNumber = document.getElementById("button-1");




/*
$(document).ready(function () {
$('#losses').html(losses);
$('#wins').html(wins);
$('#ourTotal').html(ourTotal);
$('#myRandomNumber').text(getRandomInt(19, 121));

$('#ourTotal').on('click', 'button-1', getRandomInt(1, 13));

});
*/

