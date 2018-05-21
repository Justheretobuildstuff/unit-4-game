// Creating my variables
var wins = 0;
var losses = 0;
var ourTotal = 0;
var whatyouguessed = "";
var chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "u", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"];

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      }

