$(document).ready(function () {

    // Creating my variables
    var wins = 0;
    var losses = 0;
    var redButton = 0;
    var blueButton = 0;
    var yellowButton = 0;
    var greenbButton = 0;
    var ourTotal = 0;

    function entireLoop() {

        var RandomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        var redButton = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
        var blueButton = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
        var yellowButton = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
        var greenButton = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
        var ourTotal = 0;

        $("#wins").html(wins);
        $("#losses").html(losses);
        $("#generatedNumber").html(RandomNumber);
        $("#ourTotal").html(ourTotal);

        function startOver() {
            $("#button-1").on("click", function () {
                ourTotal = redButton + ourTotal;
                $("#ourTotal").html(ourTotal);
                if (ourTotal > RandomNumber) {
                    losses = (losses + 1);
                    $("#losses").html(losses);
                }
                else if (ourTotal === RandomNumber) {
                    wins = (wins + 1);
                    $("#wins").html(wins);
                }
            });
            $("#button-2").on("click", function () {
                ourTotal = blueButton + ourTotal;
                $("#ourTotal").html(ourTotal);
                if (ourTotal > RandomNumber) {
                    losses = (losses + 1);
                    $("#losses").html(losses);
                }
                else if (ourTotal === RandomNumber) {
                    wins = (wins + 1);
                    $("#wins").html(wins);
                }
            });
            $("#button-3").on("click", function () {
                ourTotal = yellowButton + ourTotal;
                $("#ourTotal").html(ourTotal);
                if (ourTotal > RandomNumber) {
                    losses = (losses + 1);
                    $("#losses").html(losses);
                }
                else if (ourTotal === RandomNumber) {
                    wins = (wins + 1);
                    $("#wins").html(wins);
                }
            });
            $("#button-4").on("click", function () {
                ourTotal = greenButton + ourTotal;
                $("#ourTotal").html(ourTotal);
                if (ourTotal > RandomNumber) {
                    losses = (losses + 1);
                    $("#losses").html(losses);
                }
                else if (ourTotal === RandomNumber) {
                    wins = (wins + 1);
                    $("#wins").html(wins);
                }
            });

        }
    }
    entireLoop();
});