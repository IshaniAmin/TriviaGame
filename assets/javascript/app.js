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
var showAnswer;


function startScreen() {
	$("#start").html("<h2 class='btn btn-default'> Start </h2>")
}
startScreen();




$(document).on("click", "#start", function() {

	startTrivia(0);


});


function startTrivia(num) {

	$("#timer").html("Time Remaining: " + seconds + " seconds")
	$("#question-holder").html(questions[0]);
	for (i=0 ; i<answers[0].length ; i++) {
		var chooseChoice = $("#answer-choices");
		chooseChoice.append("<button> <h3 class='choice" + i + "'>" + answers[0][i] + "</h3> </button>");
	}
}



// 		var crystalvalue = $(this).data("crystalvalue");
// 		yourGuess += crystalvalue;
// 		$('#guessedScore').html('Your score: ' + yourGuess);



// function startTrivia() {
	
// 	$("#start").remove();

// 	$("#timer").html("Time Remaining: " + seconds + " seconds")

// 	$("#question-holder").html("What's the name of the bear Mowgli meets from The Jungle Book?");

// 	var choices = ["Bagheera", "Baloo", "Akela", "King Loiue"];

// 	for (i=0 ; i<choices.length ; i++) {
// 		var chooseChoice = $("#answer-choices");
// 		chooseChoice.append("<button> <h3>" + choices[i] + "</h3> </button>");
// 	}

// 	function timesOuts() {
// 		$("#timer").html("Time Remaining: " + seconds + " seconds");
// 		$("#answer-choices").remove();
// 		$("#question-holder").html("Out of Time!!");
// 		$("#correct-answer").html("The corret answer is Baloo");
// 		$("#correct-image").append("<img src ='https://media.giphy.com/media/yl8OwPJyIIYhi/giphy.gif' alt='Jungle Book' class='image-class'/>");

// 	}

// 	setTimeout(timesOuts, 1000 * 2); //testing timer

	

// }

// $("#start").click(startTrivia);




});