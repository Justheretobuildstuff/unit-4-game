$(document).ready(function() {

// Creating my variables
var wins = 0;
var losses = 0;
var ourTotal = 0;
var redButton = 0;
var blueButton = 0;
var yellowButton = 0;
var greenbButton = 0;


var RandomNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
var redButton = Math.floor(Math.random() * ((12-1)+1) + 1);
var blueButton = Math.floor(Math.random() * ((12-1)+1) + 1);
var yellowButton = Math.floor(Math.random() * ((12-1)+1) + 1);
var greenButton = Math.floor(Math.random() * ((12-1)+1) + 1);

    $("#ourTotal").append(ourTotal);
    $("#wins").append(wins);
    $("#losses").append(losses);
    $("#generatedNumber").append(RandomNumber);

    $("#button-1").on("click", function() {
        ourTotal = redButton + ourTotal;
        $("#ourTotal").html(ourTotal);

        if (ourTotal === RandomNumber) {
            wins++;
            $("#wins").html(wins);
            console.log(wins);
        };
        if (ourTotal > RandomNumber) {
            losses++;
            $("#losses").html(losses);
            console.log(losses);
        };



    });











});