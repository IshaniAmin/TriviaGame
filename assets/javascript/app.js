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
		["To marry Jasmine, to be rescued from drowning, and to free the genie", "To marry Jasmine, to put Jafar in jail, and to free the genie", "To become a prince, to be rescued from drowning, and to gain Jasmines fathers blessing to marry his daughter", "To become a prince, to be rescued from drowning, and to free the genie"], 
		["Winter", "Spring", "Summer", "Fall"], 
		["His 21st Birthday", "His 18th Birthday", "True Love's First Kiss", "His Wedding Day"], 
		["Jeff", "Robert", "Andy", "George"], 
		["Asia", "Afria", "South America", "Australia"]
		]

var	correctChoice = [
		"Baloo",
		"Prince Eric",
		"'No Worries'",
		"To become a prince, to be rescued from drowning, and to free the genie",
		"Summer",
		"His 21st Birthday",
		"Andy",
		"Africa"
	]

var images = [
	'../assets/images/jungle_book.gif',
	'../assets/images/little_mermaid.gif',
	'../assets/images/lion_king.gif',
	'../assets/images/aladdin.gif',
	'../assets/images/olaf_frozen.gif',
	'../assets/images/beauty_and_the_beast.gif',
	'../assets/images/toy_story.gif',
	'../assets/images/tarzan.gif'
]



var correct = 0;
var incorrect = 0;
var unanswered = 0;
var seconds = 20;
var timeCountdown;
var questionNum = 0;


function startScreen() {
	$("#start").html("<h2 class='btn btn-default'> Start </h2>")
}
startScreen();



$(document).on("click", "#start", function() {
	startTrivia();
	// setInterval(timeRanOut, 20 * 1000);
	// if (questionNum == 8) {
	// 	results();
	// }
});

$(document).on("click", "#answer-choices .btn", function() {

	var h3Clicked = $(this).text();
	// console.log(h3Clicked)
	
	if (h3Clicked == correctChoice[questionNum]) {
		// setTimeout(rightAnswer, 3000)
		rightAnswer();
		// loadQuestions();
	} else if (h3Clicked !== correctChoice[questionNum]) {
		wrongAnswer();
	}

});

$(document).on("click", "#start-again", function() {

	startOver();

});


function startTrivia() {

	$("#start").empty();
	$("#holder").html(questions[questionNum]);
	for (i=0 ; i<answers[questionNum].length ; i++) {
		var chooseChoice = $("#answer-choices");
		chooseChoice.append("<h3 class='btn btn-default' class='choice' >" + answers[questionNum][i] + "</h3>  <br><br>");
	}
	setInterval(secondsCountdown, 1000);
}

function secondsCountdown(){
	$("#timer").html("Time Remaining: " + seconds + " seconds");
	if (seconds == 0) {
		timeRanOut();
	} else if (seconds > 0) {
		seconds--;
	}

}

function loadQuestions(){
	seconds = 20;
	emptyDivs();
	$("#holder").html(questions[questionNum]);
	for (i=0 ; i<answers[questionNum].length ; i++) {
		var chooseChoice = $("#answer-choices");
		chooseChoice.append("<h3 class='btn btn-default' class='choice' >" + answers[questionNum][i] + "</h3>  <br><br>");
	}
}

function betweenQues() {
	if (questionNum < 7) {
		questionNum++;
		loadQuestions();
		seconds = 20;
	} else {
		results();
	}
}

function emptyDivs() {
	$("#timer").empty();
	$("#holder").empty();
	$("#final-image").empty();
	$("#correct-answer").empty();
	$("#answer-choices").empty();
	$("#correct-image").empty();
	$("#correct-answers").empty();
	$("#incorrect-answers").empty();
	$("#unanswers-answers").empty();
	$("#start-again").empty();

}

function rightAnswer() {
	emptyDivs();
	seconds = 20;
	correct++;
	// $("#timer").html("Time remaining: " + seconds + " seconds");
	$("#holder").html("You got it correct! <br> The answer is '" + correctChoice[questionNum] + ".'");
	$("#correct-image").html("<img src =" + images[questionNum] + " class='image-class' />");
	// setTimeout(loadQuestions, 5 * 1000);
	setTimeout(betweenQues, 5000);

}

function timeRanOut() {
	emptyDivs();
	seconds = 20;
	unanswered++;
	// $("#timer").html("Time remaining: " + seconds + " seconds");
	$("#holder").html("You didn't pick an answer! <br> The correct answer is '" + correctChoice[questionNum] + ".' <br>");
	$("#correct-image").html("<img src =" + images[questionNum] + " class='image-class' />");
	// setTimeout(loadQuestions, 5 * 1000);
	setTimeout(betweenQues, 5000);
}

function wrongAnswer() {
	emptyDivs();
	seconds = 20;
	incorrect++
	// $("#timer").html("Time remaining: " + seconds + " seconds");
	$("#holder").html("You picked incorrectly! <br> The correct answer is '" + correctChoice[questionNum] + ".'");
	$("#correct-image").html("<img src =" + images[questionNum] + " class='image-class' />");
	// setTimeout(loadQuestions, 5 * 1000);
	setTimeout(betweenQues, 5000);
}

function results() {
	emptyDivs();
	$("#holder").html("All done, here is your final score sheet!");
	$("#final-image").append("<img src ='../assets/images/giphy.gif' class='image-class' />");
	$("#correct-answers").html("Correct Answers: " + correct);
	$("#incorrect-answers").html("Incorrect Answers: " + incorrect);
	$("#unanswers-answers").html("Unanswered Answers: " + unanswered);
	$('#start-again').html("<h2 class='btn btn-default'> Start Over? </h2>");
}

function startOver() {
	emptyDivs();
	correct = 0;
	incorrect = 0;
	unanswered = 0;
	seconds = 20;
	questionNum = 0;
	startTrivia();
	secondsCountdown();
}

});