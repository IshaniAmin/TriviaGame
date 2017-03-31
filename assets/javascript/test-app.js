var panel = $("#trivia");
var countStartNumber = 30;

// Question set
var questions = [{
  question: "What's the name of the bear Mowgli meets from The Jungle Book?",
  answers: ["Bagheera", "Baloo", "Akela", "King Louie" ],
  correctAnswer: "Baloo",
  image: "assets/images/jungle_book.gif"
}, {
  question: "What is the name of the prince that Ariel from The Little Mermaid falls in love with?",
  answers: ["Prince John", "Prince Charming", "Prince Eric", "Prince Philip"],
  correctAnswer: "Prince Eric",
  image: "assets/images/little_mermaid.gif"
}, {
  question: "What does 'Hakuna Matata' mean?",
  answers: ["'No Worries'", "'Long Live the King'", "'Lets be Friends'", "'Eat, Sleep, and Drink'" ],
  correctAnswer: "'No Worries'",
  image: "assets/images/lion_king.gif"
}, {
  question: "What were Aladdin's 3 wishes?",
  answers: ["To marry Jasmine, to be rescued from drowning, and to free the genie", "To marry Jasmine, to put Jafar in jail, and to free the genie", "To become a prince, to be rescued from drowning, and to gain Jasmines fathers blessing to marry his daughter", "To become a prince, to be rescued from drowning, and to free the genie"],
  correctAnswer: "To become a prince, to be rescued from drowning, and to free the genie",
  image: "assets/images/aladdin.gif"
}, {
  question: "What is the Olaf from Frozen's favorite season?",
  answers: ["Winter", "Spring", "Summer", "Fall"],
  correctAnswer: "Summer",
  image: "assets/images/olaf_frozen.gif"
}, {
  question: "The Enchanted Rose in Beast's castle will continue to bloom until when?",
  answers: ["His 21st Birthday", "His 18th Birthday", "True Love's First Kiss", "His Wedding Day"],
  correctAnswer: "His 21st Birthday",
  image: "assets/images/beauty_and_the_beast.gif"
}, {
  question: "What is the name of the chracter who owns all the toys in Toy Story?",
  answers: ["Jeff", "Robert", "Andy", "George"],
  correctAnswer: "Andy",
  image: "assets/images/toy_story.gif"
}, {
  question: "What continent does Tarzan take place?",
  answers: ["Asia", "Afria", "South America", "Australia"],
  correctAnswer: "Africa",
  image: "assets/images/tarzan.gif"
}];

// Variable to hold our setInterval
var timer;

var game = {

  questions: questions,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,

  countdown: function() {
    this.counter--;
    $("#counter-number").html(this.counter);
    if (this.counter === 0) {
      console.log("TIME UP");
      this.timeUp();
    }
  },

  loadQuestion: function() {

    timer = setInterval(this.countdown.bind(this), 1000);

    panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

    for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
      panel.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
      + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
    }
  },

  nextQuestion: function() {
    this.counter = window.countStartNumber;
    $("#counter-number").html(this.counter);
    this.currentQuestion++;
    this.loadQuestion.bind(this)();
  },

  timeUp: function() {

    clearInterval(window.timer);

    $("#counter-number").html(this.counter);

    panel.html("<h2>Out of Time!</h2>");
    panel.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
    panel.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (this.currentQuestion === questions.length - 1) {
      setTimeout(this.results, 3 * 1000);
    }
    else {
      setTimeout(this.nextQuestion, 3 * 1000);
    }
  },

  results: function() {

    clearInterval(window.timer);

    panel.html("<h2>All done, heres are your results!</h2>");

    $("#counter-number").html(this.counter);

    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    panel.append("<br><button id='start-over'>Start Again?</button>");
  },

  clicked: function(e) {
    clearInterval(window.timer);
    if ($(e.target).data("name") === questions[this.currentQuestion].correctAnswer) {
      this.answeredCorrectly();
    }
    else {
      this.answeredIncorrectly();
    }
  },

  answeredIncorrectly: function() {

    this.incorrect++;

    clearInterval(window.timer);

    panel.html("<h2>Nope!</h2>");
    panel.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer + "</h3>");
    panel.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (this.currentQuestion === questions.length - 1) {
      setTimeout(this.results.bind(this), 3 * 1000);
    }
    else {
      setTimeout(this.nextQuestion.bind(this), 3 * 1000);
    }
  },

  answeredCorrectly: function() {

    clearInterval(window.timer);

    this.correct++;

    panel.html("<h2>Correct!</h2>");
    panel.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (this.currentQuestion === questions.length - 1) {
      setTimeout(this.results.bind(this), 3 * 1000);
    }
    else {
      setTimeout(this.nextQuestion.bind(this), 3 * 1000);
    }
  },

  reset: function() {
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};

// CLICK EVENTS

$(document).on("click", "#start-over", game.reset.bind(game));

$(document).on("click", ".answer-button", function(e) {
  game.clicked.bind(game, e)();
});

$(document).on("click", "#start", function() {
  $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
  game.loadQuestion.bind(game)();
});