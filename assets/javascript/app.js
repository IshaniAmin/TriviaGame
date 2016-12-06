// - create a trivia game that shows only one question until the player answers it or their time runs out.

// - start screen in beginning with start button
// - first question has a timer (30 seconds?) and question with answer choices
// - if click correct answer, show time remining, "correct!", and "correct answer was: _____" (maybe show picture and sound of answer)
// - if wrong answer is clicked, show time remaining, "not the correct answer", and "correct answer was: _____" (maybe show picture and sound of answer)
// - if no user input by the time runs out, show time remining is 0, "out of time!" and show "correct answer was: _____" (maybe show picture and sound of answer)
// - at the end of the game, show "all done, here's your final score", # of correct answers, # of incorrect answers, # of unanswered
// - at end of game, also have a start over button, which resets the game

var question;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var seconds = 30;
var showAnswer;

function startTrivia() {
	
	$("#start").remove();

	$("#timer").html("Time Remaining: " + seconds + " seconds")

	$("#question-holder").html("What's the name of the bear Mowgli meets from The Jungle Book?");

	var choices = ["Bagheera", "Baloo", "Akela", "King Loiue"];

	for (i=0 ; i<choices.length ; i++) {
		var chooseChoice = $("#answer-choices");
		chooseChoice.append("<button> <h3>" + choices[i] + "</h3> </button>");
	}

	function timesOuts() {
		$("#timer").html("Time Remaining: " + seconds + " seconds");
		$("#answer-choices").remove();
		$("#question-holder").html("Out of Time!!");
		$("#correct-answer").html("The corret answer is Baloo");
		$("#correct-image").append("<img src ='https://media.giphy.com/media/yl8OwPJyIIYhi/giphy.gif' alt='Jungle Book' />");

	}

	setTimeout(timesOuts, 1000 * 2); //testing timer

	

}

$("#start").click(startTrivia);




