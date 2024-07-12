// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

var quiz;
var quiz1;
var quiz2

quiz1 = {
    question : "Which of the following is the correct syntax to display \"Hello, World!\" in an alert box using JavaScript?",
    answer1: "A) alertBox(\"Hello, World!\");",
    answer2: "B) alert(\"Hello, World!\");",
    answer3: "C) msgBox(\"Hello, World!\");"
};

quiz2 = {
    question : "How do you create a function in JavaScript?",
    answer1: "A) function myFunction()",
    answer2: "B) def myFunction()",
    answer3: "C) create myFunction()"
};

var quizCompetation = function(){
    console.log("Question : " + quiz.question);
    console.log("Option 1 : " + quiz.answer1);
    console.log("Option 2 : " + quiz.answer2);
    console.log("Option 3 : " + quiz.answer3 + "\n");
}

quiz=quiz1;
quizCompetation();

quiz=quiz2;
quizCompetation();

/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 * 
 */