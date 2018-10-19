$(document).ready(function () {

    var rightAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 8;
    var count = 0;
    var correct = $(".correct");
    var wrong = $(".wrong");

    // START GAME //

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

        // Timer is created here //
        var sec = 60                                                                                  
        var timer = setInterval(function () {
            $("#time").text(sec--);
            if (sec == -1) {
                clearInterval(timer);
                $(".goodluck").replaceWith($(".outoftime"));
                $(".outoftime").show();

                $(".results").show();
                $("#rightanswers").html(rightAnswers);
                $("#wronganswers").html(wrongAnswers);
                $("#unanswered").html(unAnswered);
            }

        }, 1000);

            // right answer click //
            $("#dobby").on("click", function () {

                if (sec == -1) {                                                // Displays results when time runs out and user DID NOT choose answer //               
                    clearInterval(timer);
                    $(".question1").replaceWith($(".results"));
                    $(".results").show();
                    $("#playagain").show();
                    $("#unanswered").html(unAnswered--);

                    $("#playagain").on("click", function () {
                        startOver();
                    })

                }

                $(".goodluck").hide();                                         // Displays correct w/ dobby-image if "Dobby" is clicked //
                $(".question1").replaceWith($("#dobby-image"));
                correct.show();
                $("#dobby-image").show();
                $("#rightanswers").html(rightAnswers++);                         // right answer increases by 1 //
                $("#unanswered").html(unAnswered--);

                var x = setInterval(function () {

                    if (count > 3) clearInterval(x);                           // After 3 seconds, the next question automatically displays //
                    correct.hide();
                    $("#dobby-image").hide();
                    $("#dobby-image").replaceWith($(".question2"));
                    $(".question2").show();

                    if (sec == -1) {                                           // Displays results when time runs out and user DID choose an answer //
                        clearInterval(timer);
                        $(".question2").hide();
                        $(".results").show();
                        $("#playagain").show();

                        
                        $("#playagain").on("click", function () {
                            startOver();
                        })
                    }
                }, 3000);

            });

                // wrong answer click //                    
                $(".wrongchoice").on("click", function () {          

                    if (sec == -1) {                                          // Displays results when time runs out and user DID NOT choose answer //
                        clearInterval(timer);
                        $(".question1").replaceWith($(".results"));
                        $(".results").show();
                        $("#playagain").show();
                        $("#unanswered").html(unAnswered--);

                        $("#playagain").on("click", function () {
                            startOver();
                        })
                    }

                    $(".goodluck").hide();                                    // Displays wrong w/ dobby-image if wrong answer is clicked //
                    wrong.show(); 
                    $(".correctdobby").show();
                    $(".question1").replaceWith($("#dobby-image"));
                    $("#dobby-image").show();
                    $("#wronganswers").html(wrongAnswers++);                  // wrong answer increases by 1 //
                    $("#unanswered").html(unAnswered--);

                    x = setInterval(function () {

                        if (count > 3) clearInterval(x);                      // After 3 seconds, the next question automatically displays //
                        wrong.hide();
                        $(".correctdobby").hide();
                        $("#dobby-image").replaceWith($(".question2"));
                        $("#dobby-image").hide();
                        $(".question2").show();

                        if (sec == -1) {                                     // Displays results when time runs out and user DID choose an answer //
                            clearInterval(timer);
                            $(".question2").hide();
                            $(".results").show();
                            $("#playagain").show();

                            $("#playagain").on("click", function () {
                                startOver();
                            })
                        }
                    }, 3000);
                });


                // QUESTION 2: SIRIUS BLACK //

                // right answer click //
                $("#black").on("click", function () {

                    if (sec == -1) {                                        // Displays results when time runs out and user DID NOT choose answer //            
                        clearInterval(timer);
                        $(".question2").replaceWith($(".results"));
                        $(".results").show();
                        $("#playagain").show();
                        $("#unanswered").html(unAnswered--);

                        $("#playagain").on("click", function () {
                            startOver();
                        })
                    }
                
                    $(".question2").replaceWith($("#black-image"));         // Displays correct w/ black-image if "Sirius Black" is clicked //
                    correct.show();
                    $("#black-image").show();
                    $("#rightanswers").html(rightAnswers++);                // right answer increases by 1 //
                    $("#unanswered").html(unAnswered--);

                    x = setInterval(function () {

                        if (count > 3) clearInterval(x);                    // After 3 seconds, the next question automatically displays //
                        correct.hide();
                        $("#black-image").hide();
                        $("#black-image").replaceWith($(".question3"));
                        $(".question3").show();

                        if (sec == -1) {                                    // Displays results when time runs out and user DID choose an answer //
                            clearInterval(timer);
                            $(".question3").hide();
                            $(".results").show();
                            $("#playagain").show();

                            $("#playagain").on("click", function () {
                                startOver();
                            })
                        }
                    }, 3000);


                });

                // wrong answer click //
                $(".wrongchoice2").on("click", function () {               

                    if (sec == -1) {                                       // Displays results when time runs out and user DID NOT choose answer //
                        clearInterval(timer);
                        $(".question2").replaceWith($(".results"));
                        $(".results").show();
                        $("#playagain").show();
                        $("#unanswered").html(unAnswered--);

                        $("#playagain").on("click", function () {
                            startOver();
                        })
                    }
                    
                    wrong.show();                                          // Displays wrong w/ black-image if wrong answer is clicked //
                    $(".correctblack").show();
                    $(".question2").replaceWith($("#black-image"));
                    $("#black-image").show();
                    $("#wronganswers").html(wrongAnswers++);               // wrong answer increases by 1 //
                    $("#unanswered").html(unAnswered--);

                    x = setInterval(function () {

                        if (count > 3) clearInterval(x);                   // After 3 seconds, the next question automatically displays //
                        wrong.hide();
                        $(".correctblack").hide();
                        $("#black-image").replaceWith($(".question3"));
                        $("#black-image").hide();
                        $(".question3").show();

                        if (sec == -1) {                                   // Displays results when time runs out and user DID choose an answer //
                            clearInterval(timer);
                            $(".question3").hide();
                            $(".results").show();
                            $("#playagain").show();

                            $("#playagain").on("click", function () {
                                startOver();
                            })
                        }
                    }, 3000);
                });


                
                // QUESTION 3: STAG //

                // right answer click //
                $("#stag").on("click", function () {

                    if (sec == -1) {                                      // Displays results when time runs out and user DID NOT choose answer //
                        clearInterval(timer);
                        $(".question3").replaceWith($(".results"));
                        $(".results").show();
                        $("#playagain").show();
                        $("#unanswered").html(unAnswered--);

                        $("#playagain").on("click", function () {
                            startOver();
                        })
                    }
                    
                    $(".question3").replaceWith($("#stag-image"));        // Displays correct w/ stag-image if "stag" is clicked //
                    correct.show();
                    $("#stag-image").show();
                    $("#rightanswers").html(rightAnswers++);              // right answer increases by 1 //
                    $("#unanswered").html(unAnswered--);

                    x = setInterval(function () {

                        if (count > 3) clearInterval(x);                  // After 3 seconds, the next question automatically displays //
                        wrong.hide();
                        correct.hide();
                        $("#stag-image").hide();
                        $("#stag-image").replaceWith($(".question4"));
                        $(".question4").show();

                        if (sec == -1) {                                  // Displays results when time runs out and user DID choose an answer //
                            clearInterval(timer);
                            $(".question4").hide();
                            $(".results").show();
                            $("#playagain").show();

                            $("#playagain").on("click", function () {
                                startOver();
                            })
                        }
                    }, 3000);


                });

                // wrong answer click //
                $(".wrongchoice3").on("click", function () {

                    if (sec == -1) {                                      // Displays results when time runs out and user DID NOT choose answer //
                        clearInterval(timer);
                        $(".question3").replaceWith($(".results"));
                        $(".results").show();
                        $("#playagain").show();
                        $("#unanswered").html(unAnswered--);

                        $("#playagain").on("click", function () {
                            startOver();
                        })
                    }

                    $(".question3").replaceWith($("#stag-image"));
                    wrong.show();                                         // Displays wrong w/ stag-image if wrong answer is clicked //
                    $(".correctstag").show();
                    $("#stag-image").show();
                    $("#wronganswers").html(wrongAnswers++);              // wrong answer increases by 1 //
                    $("#unanswered").html(unAnswered--);

                    x = setInterval(function () {

                        if (count > 3) clearInterval(x);                  // After 3 seconds, the next question automatically displays //
                        wrong.hide();
                        $(".correctstag").hide();
                        $("#stag-image").hide();
                        $("#stag-image").replaceWith($(".question4"));
                        $(".question4").show();

                        if (sec == -1) {                                  // Displays results when time runs out and user DID choose an answer //
                            clearInterval(timer);
                            $(".question4").hide();
                            $(".results").show();
                            $("#playagain").show();

                            $("#playagain").on("click", function () {
                                startOver();
                            })
                        }
                    }, 3000);
                });


                 // QUESTION 4: BASILISK //

                 // right answer click //
                 $("#basilisk").on("click", function () {

                    if (sec == -1) {                                     // Displays results when time runs out and user DID NOT choose answer //
                        clearInterval(timer);
                        $(".question4").replaceWith($(".results"));
                        $(".results").show();
                        $("#playagain").show();
                        $("#unanswered").html(unAnswered--);

                        $("#playagain").on("click", function () {
                            startOver();
                        })
                    }
                    
                    $(".question4").replaceWith($("#basilisk-image"));   // Displays correct w/ basilisk-image if "basilisk" is clicked //
                    correct.show();
                    $("#basilisk-image").show();
                    $("#rightanswers").html(rightAnswers++);             // right answer increases by 1 //
                    $("#unanswered").html(unAnswered--);

                    x = setInterval(function () {

                        if (count > 3) clearInterval(x);                 // After 3 seconds, the next question automatically displays //
                        correct.hide();
                        $("#basilisk-image").hide();
                        $("#basilisk-image").replaceWith($(".question5"));
                        $(".question5").show();
                        
                        if (sec == -1) {                                 // Displays results when time runs out and user DID choose an answer //
                            clearInterval(timer);
                            $(".question5").hide();
                            $(".results").show();
                            $("#playagain").show();

                            $("#playagain").on("click", function () {
                                startOver();
                            })
                        }
                    }, 3000);


                });

                // wrong answer click //
                $(".wrongchoice4").on("click", function () {

                    if (sec == -1) {                                     // Displays results when time runs out and user DID NOT choose answer //
                        clearInterval(timer);
                        $(".question4").replaceWith($(".results"));
                        $(".results").show();
                        $("#playagain").show();
                        $("#unanswered").html(unAnswered--);

                        $("#playagain").on("click", function () {
                            startOver();
                        })
                    }
                
                    $(".question4").replaceWith($("#basilisk-image"));   // Displays wrong w/ basilisk-image if wrong answer is clicked //
                    wrong.show(); 
                    $(".correctbasilisk").show();
                    $("#basilisk-image").show();
                    $("#wronganswers").html(wrongAnswers++);             // wrong answer increases by 1 //
                    $("#unanswered").html(unAnswered--);

                    x = setInterval(function () {

                        if (count > 3) clearInterval(x);                 // After 3 seconds, the next question automatically displays //
                        wrong.hide();
                        $(".correctbasilisk").hide();
                        $("#basilisk-image").hide();
                        $("#basilisk-image").replaceWith($(".question5"));
                        $(".question5").show();

                        if (sec == -1) {                                 // Displays results when time runs out and user DID choose an answer //
                            clearInterval(timer);
                            $(".question5").hide();
                            $(".results").show();
                            $("#playagain").show();

                            $("#playagain").on("click", function () {
                                startOver();
                            })
                        }
                    }, 3000);
                });


                 // QUESTION 5: HAGRID //

                 // right answer click //
                 $("#hagrid").on("click", function () {

                    if (sec == -1) {                                     // Displays results when time runs out and user DID NOT choose answer //
                        clearInterval(timer);
                        $(".question5").replaceWith($(".results"));
                        $(".results").show();
                        $("#playagain").show();
                        $("#unanswered").html(unAnswered--);

                        $("#playagain").on("click", function () {
                            startOver();
                        })
                    }
                
                    $(".question5").replaceWith($("#hagrid-image"));     // Displays correct w/ hagrid-image if "hagrid" is clicked //
                    correct.show();
                    $("#hagrid-image").show();
                    $("#rightanswers").html(rightAnswers++);             // right answer increases by 1 //
                    $("#unanswered").html(unAnswered--);

                    x = setInterval(function () {

                        if (count > 3) clearInterval(x);                 // After 3 seconds, the next question automatically displays //
                        correct.hide();
                        $("#hagrid-image").hide();
                        $("#hagrid-image").replaceWith($(".question6"));
                        $(".question6").show();

                        if (sec == -1) {                                 // Displays results when time runs out and user DID choose an answer //
                            clearInterval(timer);
                            $(".question6").hide();
                            $(".results").show();
                            $("#playagain").show();

                            $("#playagain").on("click", function () {
                                startOver();
                            })
                        }
                    }, 3000);


                });

                // wrong answer click //
                $(".wrongchoice5").on("click", function () {

                    if (sec == -1) {                                     // Displays results when time runs out and user DID NOT choose answer //
                        clearInterval(timer);
                        $(".question5").replaceWith($(".results"));
                        $(".results").show();
                        $("#playagain").show();
                        $("#unanswered").html(unAnswered--);

                        $("#playagain").on("click", function () {
                            startOver();
                        })
                    }
                
                    $(".question5").replaceWith($("#hagrid-image"));     // Displays wrong w/ hagrid-image if wrong answer is clicked //
                    wrong.show(); 
                    $(".correcthagrid").show();
                    $("#hagrid-image").show();
                    $("#wronganswers").html(wrongAnswers++);             // wrong answer increases by 1 //
                    $("#unanswered").html(unAnswered--);

                    x = setInterval(function () {

                        if (count > 3) clearInterval(x);                 // After 3 seconds, the next question automatically displays //
                        wrong.hide();
                        $(".correcthagrid").hide();
                        $("#hagrid-image").hide();
                        $("#hagrid-image").replaceWith($(".question6"));
                        $(".question6").show();

                        if (sec == -1) {                                 
                            clearInterval(timer);                        // Displays results when time runs out and user DID choose an answer //
                            $(".question6").hide();
                            $(".results").show();
                            $("#playagain").show();

                            $("#playagain").on("click", function () {
                                startOver();
                            })
                        }
                    }, 3000);
                });


                 // QUESTION 6: OBLIVIATE //

                 // right answer click //
                 $("#obliviate").on("click", function () {

                    if (sec == -1) {                                     // Displays results when time runs out and user DID NOT choose answer //
                        clearInterval(timer);
                        $(".question6").replaceWith($(".results"));
                        $(".results").show();
                        $("#playagain").show();
                        $("#unanswered").html(unAnswered--);

                        $("#playagain").on("click", function () {
                            startOver();
                        })
                    }
        
                    $(".question6").replaceWith($("#obliviate-image"));  // Displays correct w/ obliviate-image if "obliviate" is clicked //
                    correct.show();
                    $("#obliviate-image").show();
                    $("#rightanswers").html(rightAnswers++);             // right answer increases by 1 //
                    $("#unanswered").html(unAnswered--);

                    x = setInterval(function () {

                        if (count > 3) clearInterval(x);                 // After 3 seconds, the next question automatically displays //
                        correct.hide();
                        $("#obliviate-image").hide();
                        $("#obliviate-image").replaceWith($(".question7"));
                        $(".question7").show();

                        if (sec == -1) {
                            clearInterval(timer);                        // Displays results when time runs out and user DID choose an answer //
                            $(".question7").hide();
                            $(".results").show();
                            $("#playagain").show();

                            $("#playagain").on("click", function () {
                                startOver();
                            })
                        }
                    }, 3000);


                });

                // wrong answer click //
                $(".wrongchoice6").on("click", function () {

                    
                    if (sec == -1) {                                     // Displays results when time runs out and user DID NOT choose answer //
                        clearInterval(timer);
                        $(".question6").replaceWith($(".results"));
                        $(".results").show();
                        $("#playagain").show();
                        $("#unanswered").html(unAnswered--);

                        $("#playagain").on("click", function () {
                            startOver();
                        })
                    }
                
                    $(".question6").replaceWith($("#obliviate-image"));    // Displays wrong w/ obliviate-image if wrong answer is clicked //
                    wrong.show(); 
                    $(".correctobliviate").show();
                    $("#obliviate-image").show();
                    $("#wronganswers").html(wrongAnswers++);                // wrong answer increases by 1 //
                    $("#unanswered").html(unAnswered--);

                    x = setInterval(function () {

                        if (count > 3) clearInterval(x);                    // After 3 seconds, the next question automatically displays //
                        wrong.hide();
                        $(".correctobliviate").hide();
                        $("#obliviate-image").hide();
                        $("#obliviate-image").replaceWith($(".question7"));
                        $(".question7").show();

                        if (sec == -1) {                                     // Displays results when time runs out and user DID choose an answer //
                            clearInterval(timer);
                            $(".question7").hide();
                            $(".results").show();
                            $("#playagain").show();

                            $("#playagain").on("click", function () {
                                startOver();
                            })
                        }
                    }, 3000);
                });


                // QUESTION 7: MOANING MYRTLE //

                // right answer click //
                 $("#myrtle").on("click", function () {

                       if (sec == -1) {                                     // Displays results when time runs out and user DID NOT choose answer //
                        clearInterval(timer);
                        $(".question7").replaceWith($(".results"));
                        $(".results").show();
                        $("#playagain").show();
                        $("#unanswered").html(unAnswered--);

                        $("#playagain").on("click", function () {
                            startOver();
                        })
                    }
            
                    $(".question7").replaceWith($("#myrtle-image"));        // Displays correct w/ myrtle-image if "Moaning Myrtle" is clicked //
                    correct.show();
                    $("#myrtle-image").show();
                    $("#rightanswers").html(rightAnswers++);                // right answer increases by 1 //
                    $("#unanswered").html(unAnswered--);

                    x = setInterval(function () {

                        if (count > 3) clearInterval(x);                    // After 3 seconds, the next question automatically displays //
                        correct.hide();
                        $("#myrtle-image").hide();
                        $("#myrtle-image").replaceWith($(".question8"));
                        $(".question8").show();

                        if (sec == -1) {                                    // Displays results when time runs out and user DID choose an answer //
                            clearInterval(timer);
                            $(".question8").hide();
                            $(".results").show();
                            $("#playagain").show();

                            $("#playagain").on("click", function () {
                                startOver();
                            })
                        }
                    }, 3000);


                });

                // wrong answer click //
                $(".wrongchoice7").on("click", function () {

                    if (sec == -1) {                                        // Displays results when time runs out and user DID NOT choose answer //
                        clearInterval(timer);
                        $(".question7").replaceWith($(".results"));
                        $(".results").show();
                        $("#playagain").show();
                        $("#unanswered").html(unAnswered--);

                        $("#playagain").on("click", function () {
                            startOver();
                        })
                    }
                
                    $(".question7").replaceWith($("#myrtle-image"));        // Displays wrong w/ myrtle-image if wrong answer is clicked //
                    wrong.show(); 
                    $(".correctmyrtle").show();
                    $("#myrtle-image").show();
                    $("#wronganswers").html(wrongAnswers++);                // wrong answer increases by 1 //
                    $("#unanswered").html(unAnswered--);

                    x = setInterval(function () {

                        if (count > 3) clearInterval(x);                    // After 3 seconds, the next question automatically displays //
                        wrong.hide();
                        $(".correctmyrtle").hide();
                        $("#myrtle-image").hide();
                        $("#myrtle-image").replaceWith($(".question8"));
                        $(".question8").show();

                        if (sec == -1) {                                    // Displays results when time runs out and user DID choose an answer //
                            clearInterval(timer);
                            $(".question8").hide();
                            $(".results").show();
                            $("#playagain").show();

                            $("#playagain").on("click", function () {
                                startOver();
                            })
                        }
                    }, 3000);
                });


                // QUESTION 8: 'MISCHIEF MANAGED' //

                // right answer click //
                  $("#map").on("click", function () {  
                    
                    if (sec == -1) {                                        // Displays results when time runs out and user DID NOT choose answer //
                        clearInterval(timer);
                        $(".question8").replaceWith($(".results"));
                        $(".results").show();
                        $("#playagain").show();
                        $("#unanswered").html(unAnswered--);

                        $("#playagain").on("click", function () {
                            startOver();
                        })
                    }
                
                    $(".question8").replaceWith($("#map-image"));           // Displays correct w/ map-image if "'Mischief Managed'" is clicked //
                    correct.show();
                    $("#map-image").show();
                    $("#rightanswers").html(rightAnswers++);                // right answer increases by 1 //
                    $("#unanswered").html(unAnswered--);
                    
                    x = setInterval(function () {

                        if (count > 3) clearInterval(x);                    // After 3 seconds, the RESULT automatically displays //
                        correct.hide();
                        clearInterval(timer);
                        $("#map-image").hide();
                        $("#map-image").replaceWith($(".results"));
                        $(".results").show();
                        $("#playagain").show();

                        $("#playagain").on("click", function () {
                            startOver();
                        })
                    }, 3000);


                });

                // wrong answer click //
                $(".wrongchoice8").on("click", function () {

                      
                    if (sec == -1) {                                        // Displays results when time runs out and user DID NOT choose answer //
                        clearInterval(timer);
                        $(".question8").replaceWith($(".results"));
                        $(".results").show();
                        $("#playagain").show();
                        $("#unanswered").html(unAnswered--);

                        $("#playagain").on("click", function () {
                            startOver();
                        })
                    }
                
                    $(".question8").replaceWith($("#map-image"));           // Displays wrong w/ map-image if wrong answer is clicked //
                    wrong.show(); 
                    $(".correctmap").show();
                    $("#map-image").show();
                    $("#wronganswers").html(wrongAnswers++);                // wrong answer increases by 1 //
                    $("#unanswered").html(unAnswered--);

                    x = setInterval(function () {
                        
                        if (count > 3) clearInterval(x);                    // After 3 seconds, the RESULT automatically displays //
                        wrong.hide();
                        clearInterval(timer);
                        $(".correctmap").hide();
                        $("#map-image").hide();
                        $("#map-image").replaceWith($(".results"));
                        $(".results").show();
                        $("#playagain").show();

                        $("#playagain").on("click", function () {
                            startOver();
                        })

                    }, 3000);

                });
                
                if(rightAnswers >= 5 && wrongAnswers <= 4) {                                     // displays the number of right/wrong and unanswered answers //
                    $("#pass").show();
                } else {
                    $("#fail").show();
                }
        


      })
})

function startOver() {
    window.location.reload(false);
}
// Timer for one minute goes off. displays in "Time remaining"
// Player cannot choose more than one answer.
// After answer is chosen, display answer "correct" or "incorrect" for 5 seconds. Time remaining gameplay is frozen here.
// Display next question and resume gameplay time. 
// After time runs out, display results.
// If get 6/8 or above correct, display "Bloody Wicked!"
// If get 5/8 or lower correct, display "Bloody Hell"
// Include Play Again Button at end.