// - create a trivia game that shows only one question until the player answers it or their time runs out.

// - start screen in beginning with start button
// - first question has a timer (30 seconds?) and question with answer choices
// - if click correct answer, show time remining, "correct!", and "correct answer was: _____" (maybe show picture and sound of answer)
// - if wrong answer is clicked, show time remaining, "not the correct answer", and "correct answer was: _____" (maybe show picture and sound of answer)
// - if no user input by the time runs out, show time remining is 0, "out of time!" and show "correct answer was: _____" (maybe show picture and sound of answer)
// - at the end of the game, show "all done, here's your final score", # of correct answers, # of incorrect answers, # of unanswered
// - at end of game, also have a start over button, which resets the game

$(document).ready(function() {


var questions = [
		"What's the name of the bear Mowgli meets from The Jungle Book?", 
		"What is the name of the prince that Ariel from The Little Mermaid falls in love with?", 
		"What does 'Hakuna Matata' mean?", 
		"What were Aladdin's 3 wishes?", 
		"What is the Olaf from Frozen's favorite season?", 
		"The Enchanted Rose in Beast's castle will continue to bloom until when?", 
		"What is the name of the chracter who owns all the toys in Toy Story?", 
		"What continent does Tarzan take place?"
		]

var	answers = [
		["Bagheera", "Baloo", "Akela", "King Louie" ], 
		["Prince John", "Prince Charming", "Prince Eric", "Prince Philip"], 
		["'No Worries'", "'Long Live the King'", "'Lets be Friends'", "'Eat, Sleep, and Drink'" ], 
		["To marry Jasmine, to be rescued from drowning, and to free the genie", "To marry Jasmine, to put Jafar in jail, and to free the genie", "To become a prince, to be rescued from drowning, and to gain Jasmine’s father’s blessing to marry his daughter", "To become a prince, to be rescued from drowning, and to free the genie"], 
		["Winter", "Spring", "Summer", "Fall"], 
		["His 21st Birthday", "His 18th Birthday", "True Love's First Kiss", "His Wedding Day"], 
		["Jeff", "Robert", "Andy", "George"], 
		["Asia", "Afria", "South America", "Australia"]
		]

var	correctChoice = [
		"Baloo",
		"Prince Eric",
		"No Worries",
		"To become a prince, to be rescued from drowning, and to free the genie",
		"Summer",
		"His 21st Birthday",
		"Andy",
		"Africa"
	]

var images = [
	"../TriviaGame/assets/images/jungle_book.gif",
	"../TriviaGame/assets/images/little_mermaid.gif",
	"../TriviaGame/assets/images/lion_king.gif",
	"../TriviaGame/assets/images/aladdin.gif",
	"../TriviaGame/assets/images/olaf_frozen.gif",
	"../TriviaGame/assets/images/beauty_and_the_beast.gif",
	"../TriviaGame/assets/images/toy_story.gif",
	"../TriviaGame/assets/images/tarzan.gif"
]



var correct = 0;
var incorrect = 0;
var unanswered = 0;
var seconds = 30;
var questionNum = 4;
var showAnswer;


function startScreen() {
	$("#start").html("<h2 class='btn btn-default'> Start </h2>")
}
startScreen();




$(document).on("click", "#start", function() {

	startTrivia();

});


function startTrivia() {

	$("#timer").html("Time Remaining: " + seconds + " seconds")
	$("#holder").html(questions[questionNum]);
	for (i=0 ; i<answers[questionNum].length ; i++) {
		var chooseChoice = $("#answer-choices");
		chooseChoice.append("<button> <h3 class='choice" + i + "'>" + answers[questionNum][i] + "</h3> </button>");
	}
}

function rightAnswer() {
	correct++
	$("#timer").html("Time remaining: " + seconds + " seconds");
	$("#holder").html("You got it correct! The answer is " + answers[questionNum]);
	$("#correct-image").html("<img src=" + images[questionNum] + "alt=" + correctChoice[questionNum] + " class='image-class' />")
}

function timeRanOut() {
	unanswered++;
	$("#timer").html("Time remaining: " + seconds + " seconds");
	$("#holder").html("You did not answer! The corect answer is " + answers[questionNum]);
	$("#correct-image").html("<img src=" + images[questionNum] + "alt=" + correctChoice[questionNum] + " class='image-class' />")
}

function wrongAnswer() {
	incorrect++
	$("#timer").html("Time remaining: " + seconds + " seconds");
	$("#holder").html("You picked incorrectly! The corect answer is " + answers[questionNum]);
	$("#correct-image").html("<img src=" + images[questionNum] + "alt=" + correctChoice[questionNum] + " class='image-class' />")
}

function results() {
	$("#holder").html("All done, here is your final score sheet!");
	$("#correct-answer").html("Correct Answers:" + correct);
	$("#answer-choices").html("Incorrect Answers:" + incorrect);
	$("#correct-image").html("Unanswered Answers:" + unanswered);

}

function betweenQuestions() {
	if (questionNum <= 8) {
		questionNum++;
		startTrivia();

	} else if (questionNum > 8) {
		results();
	}
}

function reset() {
	correct = 0;
	incorrect = 0;
	unanswered = 0;
	seconds = 30;
	questionNum = 0;
	startTrivia();
}







});