/* 
Krysti Helton
Final Project 12/6/25
*/

//Declare Variables
let score = 0;                 // numeric variable
let questionIndex = 0;         // which question we are on
let isGameActive = false;      // boolean flag
let currentCorrectIndex = 0;   // stores the correct answer index

// Quiz questions including images
const questions = [
    {
        text: "Where can you find the schedule of completed and upcoming appointments?",
        img: "images/Subscription.png",
        answers: ["1", "2", "3"],
        correct: 2
    },
    {
        text: "On which route would you schedule a termite warranty service?",
        img: "images/Termite Route.png",
        answers: ["1", "2", "3"],
        correct: 2
    },
    {
        text: "A customer calls in because they are having complications since having insulation installed, who should you reach out to for scheduling assistance?",
        img: "images/Question.jpg",
        answers: ["Scheduling Team", "NS Support", "NS Schedulers"],
        correct: 1
    },
    {
        text: "A customer has requested to only be scheduled for future appointments on a Friday, what should you do?",
        img: "images/Question.jpg",
        answers: ["Add a special scheduling note", "Flag it schedule with customer", "Add a red note"],
        correct: 0
    }
];

//Select HTML Elements

const questionText = document.getElementById("questionText");
const questionImg = document.getElementById("questionImg");
const scoreText = document.getElementById("scoreText");
const answerBtns = document.querySelectorAll(".answerBtn");
const startBtn = document.getElementById("startBtn");

//Event Listeners

// Start button
startBtn.addEventListener("click", startGame);

// Answer buttons
answerBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => checkAnswer(index));
});

//Functions

function startGame() {
    // Get player name
    let player = document.getElementById("playerName").value.trim();

    // Check if the player name is empty
    if (player === "") {
        alert("Please enter your name before starting the quiz!");
        return; // stop the function
    }

    isGameActive = true;
    score = 0;
    questionIndex = 0;

    alert("Welcome to the Quiz, " + player + "!");

    // Show answers section
    document.getElementById("answers").style.display = "block";

    loadQuestion();
}

// Loads the next question 
function loadQuestion() {
    if (questionIndex >= questions.length) {
        endGame();
        return;
    }

    const q = questions[questionIndex];

    questionText.textContent = q.text;
    questionImg.src = q.img;

    // Shows the image once the quiz begins
    questionImg.style.display = "block";

    answerBtns.forEach((btn, i) => {
        btn.textContent = q.answers[i];
    });

    currentCorrectIndex = q.correct;
}

// Checks the answer 
function checkAnswer(selectedIndex) {

    if (!isGameActive) return;  // logical NOT operator

    if (selectedIndex === currentCorrectIndex) {
        score = score + 1;      // arithmetic operator
        alert("Correct!");
    } else {
        const correctText = questions[questionIndex].answers[currentCorrectIndex];
        alert("Incorrect.\nCorrect answer: " + correctText);
    }

    scoreText.textContent = "Score: " + score;

    questionIndex++;  // move to next question

    loadQuestion();
}

// Ends the game 
function endGame() {
    isGameActive = false;

    let percentage = ((score / questions.length) * 100).toFixed(2);
    let player = document.getElementById("playerName").value;

    alert("Quiz completed!\nScore: " + score + " / " + questions.length +
          "\nAccuracy: " + percentage + "%");

    // Hides the image again
    questionImg.style.display = "none";

    questionText.textContent = "Click Start to play again!";
}
