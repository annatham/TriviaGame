console.log("let's play a game!");

var questions = [{
  question: "In what city is the Office based in?",
  choices: ["Nashua, NH", "Newport, RI", "Salem, MA", "Scranton, PA"],
  correctAnswer: "Scranton, PA",
  image: "assets/images/scranton.gif"
},
{
  question: "What product does Dunder Mifflin sell?",
  choices: ["Toys", "Paper", "Car Parts", "Books"],
  correctAnswer: "Paper",
  image: "assets/images/paper.gif"
},
{
  question: "Who dropped the chili?",
  choices: ["Kevin Malone", "Oscar Martinez", "Toby Flenderson", "Kelly Kapoor"],
  correctAnswer: "Kevin",
  image: "assets/images/chili.gif"
},
{
  question: "Where did Michael Scott and Jan Levinson go for vacation?",
  choices: ["The Virgin Islands", "Jamaica", "Barbados", "The Florida Keys"],
  correctAnswer: "Jamaica",
  image: "assets/images/jamaica.gif"
},
{
  question: "What is Bob Vance's line of work?",
  choices: ["Chef", "Paper Salesman", "Refrigeration", "Teacher"],
  correctAnswer: "Refrigeration",
  image: "assets/images/bob_vance.gif"
},
{
  question: "Who started the fire?",
  choices: ["Meredith Palmer", "Andy Bernard", "Michael Scott", "Ryan Howard"],
  correctAnswer: "Refrigertion",
  image: "assets/images/fire.gif"
},
{
  question: "What kind of object was stuck on Dwight Schrute's head?",
  choices: ["Pumpkin", "Bucket", "Turkey", "Basketball"],
  correctAnswer: "Pumpkin",
  image: "assets/images/pumpkin.gif"
}
];

//  Variable that will hold interval ID when executeed
var intervalId;

var counter = 5;
var correct = 0;
var incorrect = 0;

//  The decrement function.
function decrement() {

  //  Decrease number by one.
  counter--;
  //  Show the number in the #timer tag
  $("#timer").text("Timer: " + counter);

  //  Once number hits zero...
  if (counter === 0) {
  // run the stop function.
    stop();
    endGame();

  }
};

function runGame() {

  intervalId = setInterval(decrement, 1000);

  $("#start").remove();

  // iterate through the questions and answers
  for (var i = 0; i < questions.length; i++) {
    $("#questions").append("<p>"+ questions[i].question +"<p>");

    // list input options, need spaces between options
    for (var a = 0; a <questions[i].choices.length; a++) {
      $("#questions").append("<input class='form-check-input' type='checkbox'id='inlineCheckbox1'" + i +
        "'value='" + questions[i].choices[a] + "''>" + questions[i].choices[a] + "  ");
    }
  }

  // append submit button to page
  $("#questions").append("<hr><button type='button' class='btn btn-outline-dark' id='submit'>Submit</button>");
};


function calculateResults(){
  
  $("#timer").remove();
  $("#questions").remove();

  $("#results").append("Correct: " + correct);
  $("#results").append("<br>" + "Incorrect: " + incorrect);

  $("#results").append("<hr><button type='button' class='btn btn-outline-dark' id='reset'>Reset</button>");

};

function endGame(){
  // clear timeer
  clearInterval(intervalId);

  // grabs input data
  var answers = $("#questions").children("input:checked");

  for (var i = 0; i < answers.length; i++) {
    if ($(answers[i]).val() === questions[i].correctAnswer) {
      correct++;
    } else {
      incorrect++;
    }

  }
  
  calculateResults();

};

// figure out this part
function reset(){
 $("#results").remove();

 $("#quiz").append();
 $("#start").append();
};



$(document).on("click", "#start", function() {
  runGame();
});

$(document).on("click", "#submit", function() {
  calculateResults();
});

// is not returning to start oage
$(document).on("click", "#reset", function() {
  reset();
});

