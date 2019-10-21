console.log("let's play a game!");


//  Variable that will hold  interval ID when executeed
var intervalId;

var questions = [{
  question: "In what city is the Office based in?",
  answers: ["Nashua, NH", "Newport, RI", "Salem, MA", "Scranton, PA"],
  correctAnswer: "Scranton, PA",
  image: "assets/images/scranton.gif"
},
{
  question: "What product does Dunder Mifflin sell?",
  answers: ["Toys", "Paper", "Car Parts", "Books"],
  correctAnswer: "Paper",
  image: "assets/images/paper.gif"
},
{
  question: "Who dropped the chili?",
  answers: ["Kevin Malone", "Oscar Martinez", "Toby Flenderson", "Kelly Kapoor"],
  correctAnswer: "Kevin",
  image: "assets/images/chili.gif"
},
{
  question: "Where did Michael Scott and Jan Levinson go for vacation?",
  answers: ["The Virgin Islands", "Jamaica", "Barbados", "The Florida Keys"],
  correctAnswer: "Jamaica",
  image: "assets/images/jamaica.gif"
},
{
  question: "What is Bob Vance's line of work?",
  answers: ["Chef", "Paper Salesman", "Refrigeration", "Teacher"],
  correctAnswer: "Refrigeration",
  image: "assets/images/bob_vance.gif"
},
{
  question: "Who started the fire?",
  answers: ["Meredith Palmer", "Andy Bernard", "Michael Scott", "Ryan Howard"],
  correctAnswer: "Refrigertion",
  image: "assets/images/fire.gif"
},
{
  question: "What kind of object was stuck on Dwight Schrute's head?",
  answers: ["Pumpkin", "Bucket", "Turkey", "Basketball"],
  correctAnswer: "Pumpkin",
  image: "assets/images/pumpkin.gif"
}
]


function runGame() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);

  var counter = 25;
  var correct = 0;
  var incorrect = 0;

  //  The decrement function.
  function decrement() {

    //  Decrease number by one.
    counter--;


    //  Show the number in the #timer tag
    $("#timer").html("Time Remaining: " + counter);


    //  Once number hits zero...
    if (counter === 0) {

    // run the stop function.
      stop();
      alert("Time is up!");

    }
  }

  function loadQuiz(){

    $("#questions").html(+ questions)
    
  }
  
  function stop(){

  
  }

}

function calculateResults(){
    $("#submit").on("click", )

}
//  Execute the run function.
runGame();


// on click event to load results

// create function to calculate results