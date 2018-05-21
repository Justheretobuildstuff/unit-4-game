// Creating my variables
var wins = 0;
var losses = 0;
var ourTotal = 0;
var redbutton = 0;
var bluebutton = 0;
var yellowbutton = 0;
var greenbuttton = 0;
var myRandomNumber = 0;


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var red = document.getElementById("red");
var blue = document.getElementById("blue");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");

$('#myRandomNumber').text(getRandomInt(19, 121));

$("ourTotal").click(getRandomInt(1, 13))
    $("ourTotal").append()

$(document).ready(function () {
    

$('#ourTotal').text(getRandomInt(1, 13))

});


