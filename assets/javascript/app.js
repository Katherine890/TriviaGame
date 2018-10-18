$(document).ready(function () {

    var rightAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;
    var count = 0;
    var correct = $(".correct");
    var wrong = $(".wrong");


    // Displays content after clicking the start button //
    $(".startbutton").click(function () {
        // start button is replaced with "Good Luck!" //
        $(".startbutton").replaceWith($(".goodluck"));
        // "Good Luck", Question 1, and time are displayed //
        $(".goodluck").show(); 
        $(".question1").show();
        $(".timedisplay").show();
        $("#time").show();

        // QUESTION 1: DOBBY //
        var sec = 10
        var timer = setInterval(function () {
            $("#time").text(sec--);
            if (sec == -1) {
                clearInterval(timer);
                $(".goodluck").replaceWith($(".outoftime"));
                $(".outoftime").show();
                //$(".correctdobby").show();
                //$("#dobby-image").show();
                $(".question1").hide();
                $(".results").show();
                $("#unanswered").html(unAnswered++);
              //  var x = setInterval(function () {
                //    if (count > 3) clearInterval(x);
                //    $(".outoftime, .correctdobby").hide();
                //    $("#dobby-image").hide();
                //    $("#dobby-image").replaceWith($(".question2"));
                //    $(".question2").show();
               // }, 3000);

            }

        }, 1000);

            $("#dobby").on("click", function () {
               // clearInterval(timer);
                $(".goodluck").hide();
                $(".question1").replaceWith($("#dobby-image"));
                correct.show();
                $("#dobby-image").show();
                $("#rightanswers").html(rightAnswers++);
                var x = setInterval(function () {
                    if (count > 3) clearInterval(x);
                    $("#dobby-image").hide();
                    $("#dobby-image").replaceWith($(".question2"));
                    correct.hide();
                    $(".question2").show();
                }, 3000);


            });

                $(".wrongchoice").on("click", function () {
                  //  clearInterval(timer);
                    $(".goodluck").hide();
                    wrong.show(); 
                    $(".correctdobby").show();
                    $(".question1").replaceWith($("#dobby-image"));
                    $("#dobby-image").show();
                    $("#wronganswers").html(wrongAnswers++);
                    x = setInterval(function () {
                        if (count > 3) clearInterval(x);
                        wrong.hide();
                        $(".correctdobby").hide();
                        $("#dobby-image").replaceWith($(".question2"));
                        $("#dobby-image").hide();
                        $(".question2").show();
                    }, 3000);
                });


                
                // QUESTION 2: SIRIUS BLACK //
               // var sec2 = 10
               // var timer2 = setInterval(function () {
                 //   $("#time").text(sec2--);
                  //  if (sec2 == -1) {
                  //      clearInterval(timer2);
                   //     $(".outoftime, .correctblack").show();
                    //    $("#black-image").show();
                       // $(".results").show();
                     //   $(".question2").hide();
                     //   $("#unanswered").html(unAnswered++);
                     //   var x = setInterval(function () {
                     //       if (count > 3) clearInterval(x);
                      //      $(".outoftime, .correctblack").hide();
                      //      $("#black-image").hide();
                      //      $("#black-image").replaceWith($(".question3"));
                       //     $(".question3").show();
                      //  }, 3000);
        
                   // }
        
               // }, 1000);


                $("#black").on("click", function () {
                    //clearInterval(timer);
                    $(".question2").replaceWith($("#black-image"));  // THE FIX : always replace with something //
                    correct.show();
                    $("#black-image").show();
                    $("#rightanswers").html(rightAnswers++);
                    x = setInterval(function () {
                        if (count > 3) clearInterval(x);
                        correct.hide();
                        $("#black-image").hide();
                        $("#black-image").replaceWith($(".question3"));
                        $(".question3").show();
                    }, 3000);


                });

                $(".wrongchoice2").on("click", function () {
                    //clearInterval(timer);
                    wrong.show(); 
                    $(".correctblack").show();
                    $(".question2").replaceWith($("#black-image"));
                    $("#black-image").show();
                    $("#wronganswers").html(wrongAnswers++);
                    x = setInterval(function () {
                        if (count > 3) clearInterval(x);
                        wrong.hide();
                        $(".correctblack").hide();
                        $("#black-image").replaceWith($(".question3"));
                        $("#black-image").hide();
                        $(".question3").show();
                    }, 3000);
                });


                
                // QUESTION 3: STAG //
                $("#stag").on("click", function () {
                    //clearInterval(timer);
                    $(".question3").replaceWith($("#stag-image"));  // THE FIX : always replace with something //
                    correct.show();
                    $("#stag-image").show();
                    $("#rightanswers").html(rightAnswers++);
                    x = setInterval(function () {
                        if (count > 3) clearInterval(x);
                        correct.hide();
                        $("#stag-image").hide();
                        $("#stag-image").replaceWith($(".question4"));
                        $(".question4").show();
                    }, 3000);


                });

                $(".wrongchoice3").on("click", function () {
                    //clearInterval(timer);
                    $(".question3").replaceWith($("#stag-image"));
                    wrong.show(); 
                    $(".correctstag").show();
                    $("#stag-image").show();
                    $("#wronganswers").html(wrongAnswers++);
                    x = setInterval(function () {
                        if (count > 3) clearInterval(x);
                        wrong.hide();
                        $(".correctstag").hide();
                        $("#stag-image").hide();
                        $("#stag-image").replaceWith($(".question4"));
                        $(".question4").show();
                    }, 3000);
                });


                 
                
                // QUESTION 4: BASILISK //
                 $("#basilisk").on("click", function () {
                    //clearInterval(timer);
                    $(".question4").replaceWith($("#basilisk-image"));  // THE FIX : always replace with something //
                    correct.show();
                    $("#basilisk-image").show();
                    $("#rightanswers").html(rightAnswers++);
                    x = setInterval(function () {
                        if (count > 3) clearInterval(x);
                        correct.hide();
                        $("#basilisk-image").hide();
                        $("#basilisk-image").replaceWith($(".question5"));
                        $(".question5").show();
                    }, 3000);


                });

                $(".wrongchoice4").on("click", function () {
                    //clearInterval(timer);
                    $(".question4").replaceWith($("#basilisk-image"));
                    wrong.show(); 
                    $(".correctbasilisk").show();
                    $("#basilisk-image").show();
                    $("#wronganswers").html(wrongAnswers++);
                    x = setInterval(function () {
                        if (count > 3) clearInterval(x);
                        wrong.hide();
                        $(".correctbasilisk").hide();
                        $("#basilisk-image").hide();
                        $("#basilisk-image").replaceWith($(".question5"));
                        $(".question5").show();
                    }, 3000);
                });




                 // QUESTION 5: HAGRID //
                 $("#hagrid").on("click", function () {
                    //clearInterval(timer);
                    $(".question5").replaceWith($("#hagrid-image"));  // THE FIX : always replace with something //
                    correct.show();
                    $("#hagrid-image").show();
                    $("#rightanswers").html(rightAnswers++);
                    x = setInterval(function () {
                        if (count > 3) clearInterval(x);
                        correct.hide();
                        $("#hagrid-image").hide();
                        $("#hagrid-image").replaceWith($(".question6"));
                        $(".question6").show();
                    }, 3000);


                });

                $(".wrongchoice5").on("click", function () {
                    //clearInterval(timer);
                    $(".question5").replaceWith($("#hagrid-image"));
                    wrong.show(); 
                    $(".correcthagrid").show();
                    $("#hagrid-image").show();
                    $("#wronganswers").html(wrongAnswers++);
                    x = setInterval(function () {
                        if (count > 3) clearInterval(x);
                        wrong.hide();
                        $(".correcthagrid").hide();
                        $("#hagrid-image").hide();
                        $("#hagrid-image").replaceWith($(".question6"));
                        $(".question6").show();
                    }, 3000);
                });


                 // QUESTION 6: OBLIVIATE //
                 $("#obliviate").on("click", function () {
                    //clearInterval(timer);
                    $(".question6").replaceWith($("#obliviate-image"));  // THE FIX : always replace with something //
                    correct.show();
                    $("#obliviate-image").show();
                    $("#rightanswers").html(rightAnswers++);
                    x = setInterval(function () {
                        if (count > 3) clearInterval(x);
                        correct.hide();
                        $("#obliviate-image").hide();
                        $("#obliviate-image").replaceWith($(".question7"));
                        $(".question7").show();
                    }, 3000);


                });

                $(".wrongchoice6").on("click", function () {
                    //clearInterval(timer);
                    $(".question6").replaceWith($("#obliviate-image"));
                    wrong.show(); 
                    $(".correctobliviate").show();
                    $("#obliviate-image").show();
                    $("#wronganswers").html(wrongAnswers++);
                    x = setInterval(function () {
                        if (count > 3) clearInterval(x);
                        wrong.hide();
                        $(".correctobliviate").hide();
                        $("#obliviate-image").hide();
                        $("#obliviate-image").replaceWith($(".question7"));
                        $(".question7").show();
                    }, 3000);
                });



                 // QUESTION 7: MOANING MYRTLE //
                 $("#myrtle").on("click", function () {
                    //clearInterval(timer);
                    $(".question7").replaceWith($("#myrtle-image"));  // THE FIX : always replace with something //
                    correct.show();
                    $("#myrtle-image").show();
                    $("#rightanswers").html(rightAnswers++);
                    x = setInterval(function () {
                        if (count > 3) clearInterval(x);
                        correct.hide();
                        $("#myrtle-image").hide();
                        $("#myrtle-image").replaceWith($(".question8"));
                        $(".question8").show();
                    }, 3000);


                });

                $(".wrongchoice7").on("click", function () {
                    //clearInterval(timer);
                    $(".question7").replaceWith($("#myrtle-image"));
                    wrong.show(); 
                    $(".correctmyrtle").show();
                    $("#myrtle-image").show();
                    $("#wronganswers").html(wrongAnswers++);
                    x = setInterval(function () {
                        if (count > 3) clearInterval(x);
                        wrong.hide();
                        $(".correctmyrtle").hide();
                        $("#myrtle-image").hide();
                        $("#myrtle-image").replaceWith($(".question8"));
                        $(".question8").show();
                    }, 3000);
                });



                  // QUESTION 8: 'MISCHIEF MANAGED' //
                  $("#map").on("click", function () {
                    //clearInterval(timer);
                    $(".question8").replaceWith($("#map-image"));  // THE FIX : always replace with something //
                    correct.show();
                    $("#map-image").show();
                    $("#rightanswers").html(rightAnswers++);
                    x = setInterval(function () {
                        if (count > 3) clearInterval(x);
                        correct.hide();
                        $("#map-image").hide();
                        $("#map-image").replaceWith($(".results"));
                        $(".results").show();
                    }, 3000);


                });

                $(".wrongchoice8").on("click", function () {
                    //clearInterval(timer);
                    $(".question8").replaceWith($("#map-image"));
                    wrong.show(); 
                    $(".correctmap").show();
                    $("#map-image").show();
                    $("#wronganswers").html(wrongAnswers++);
                    x = setInterval(function () {
                        if (count > 3) clearInterval(x);
                        wrong.hide();
                        $(".correctmap").hide();
                        $("#map-image").hide();
                        $("#map-image").replaceWith($(".results"));
                        $(".results").show();
                    }, 3000);

                });

                if(rightAnswers >= 5) {
                    $("#pass").show();
                } else {
                    $("#fail").show();
                }

                



    })
})
// Timer for one minute goes off. displays in "Time remaining"
// Player cannot choose more than one answer.
// After answer is chosen, display answer "correct" or "incorrect" for 5 seconds. Time remaining gameplay is frozen here.
// Display next question and resume gameplay time. 
// After time runs out, display results.
// If get 6/8 or above correct, display "Bloody Wicked!"
// If get 5/8 or lower correct, display "Bloody Hell"
// Include Play Again Button at end.