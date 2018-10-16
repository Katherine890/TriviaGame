$(document).ready(function () {

    // Displays content after clicking the start button //
    $(".startbutton").click(function () {
        $(".startbutton").on("click", run);
        // start button is replaced with "Good Luck!" //
        $(".startbutton").replaceWith($(".goodluck"));
        // "Good Luck", Question 1, and time are displayed //
        $(".goodluck").show();             
        $(".question1").show();
        $(".timedisplay").show();

        // This sets interval that runs decrement function once each second //
        //  Clearing the intervalId before setting our new intervalId won't allow many instances.
        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }

        // set counter to 120 seconds //
        var number = 120;

        // This holds our interval ID when we run our function //
        var intervalId;

        // This function shows the decreasing number on the time //
        function decrement() {
            number--;
            if (number < 0) {
                number = 0;
            }
            
            $("#time").html(number);
            console.log(decrement);

            // This shows results once the timer hits zero //
            if (number === 0) {
                stop();
                $(".content").replaceWith($(".results"));
                $(".results").show();
            }

        }

        // This clears our intervalID //
        function stop() {
            clearInterval(intervalId);
        }

        // This runs the function //
        run();

        // These are variables for the end results //
        var rightAnswers = 0;
        var wrongAnswers = 0;
        var unAnswered = 0;

        ($("#dobby")).on("click", function () {
        stop();
        $(".goodluck").replaceWith($(".correct"));
        $(".question1").replaceWith($("#dobby-image"));
        $(".correct").show();
        $("#dobby-image").show();
        $("#rightanswers").html(rightAnswers++);
        setTimeout (nextQ(), 3000);

        });

        function nextQ() {
        $("#dobby-image").replaceWith($(".question2"));
        $(".question2").show();
        $(".correct").hide();
        $("#dobby-image").hide();
        }

        

        run();

        ($(".wrongchoice")).on("click", function () {
            stop();
            $(".goodluck").replaceWith($(".wrong"));
            $(".question1").replaceWith($("#dobby-image"));
            $(".wrong").show();
            $(".correctdobby").show();
            $("#dobby-image").show();
            $("#wronganswers").html(wrongAnswers++);
        });
    })
})


// Timer for one minute goes off. displays in "Time remaining"
// Player cannot choose more than one answer.
// After answer is chosen, display answer "correct" or "incorrect" for 5 seconds. Time remaining gameplay is frozen here.
// Display next question and resume gameplay time. 
// After time runs out, display results.
// If get 6/8 or above correct, display "Well Done!"
// If get 5/8 or lower correct, display "Nice Try"
// Include Play Again Button at end.