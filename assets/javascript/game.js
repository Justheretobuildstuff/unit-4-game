// Creating my variables
var wins = 0;
var losses = 0;
var ourTotal = 0;
var bluebutton = 0;
var yellowbutton = 0;
var greenbuttton = 0;
var anotherRandomNumber = 0;


var RandomNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
var redButton = Math.floor(Math.random() * ((12-1)+1) + 1);
var blueButton = Math.floor(Math.random() * ((12-1)+1) + 1);
var yellowButton = Math.floor(Math.random() * ((12-1)+1) + 1);
var greenButton = Math.floor(Math.random() * ((12-1)+1) + 1);

$(document).ready(function() {
    $("#generatedNumber").append(RandomNumber);











});