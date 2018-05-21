// Creating my variables
var wins = 0;
var losses = 0;
var ourTotal = 0;


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var red = document.getElementById("red");
var blue = document.getElementById("blue");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");

var operatorPressed = false;

    $('.game').on('click', '.number', function () {

        if (operatorPressed === false) {
            // first number
            $('#ourTotalScore').append(this.value);
        }
    });
