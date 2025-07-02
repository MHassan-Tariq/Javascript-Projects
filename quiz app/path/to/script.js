const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Which is the most intelligent parrot in the world?",
        answers: [
            { text: "Budgie parrot", correct: false },
            { text: "Ringneck parrot", correct: false },
            { text: "Macaw parrot", correct: false },
            { text: "Grey parrot", correct: true }
        ]
    },
    {
        question: "Who is the biggest superstar in Bollywood?",
        answers: [
            { text: "Salman Khan", correct: false },
            { text: "Shah Rukh Khan", correct: true },
            { text: "Aamir Khan", correct: false },
            { text: "Aryan Khan", correct: false }
        ]
    },
    {
        question: "Which is the tallest building in the world?",
        answers: [
            { text: "Burj Khalifa", correct: true },
            { text: "Minar Pakistan", correct: false },
            { text: "Faisal Masjid", correct: false },
            { text: "Santoras Mall", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

// Start the quiz when the page loads
startQuiz();

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Next";
    nextButton.style.display = "none";
    showQuestion();
}

// Function to display a question and its answers
function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

// Function to reset the state (clear answer buttons and status)
function resetState() {
    nextButton.style.display = "none";
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    clearStatusClass(document.body);
}

// Function to handle selecting an answer
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    setStatusClass(selectedButton, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct) {
            setStatusClass(button, true);
        }
        button.disabled = true;
    });
    if (correct) {
        score++;
    }
    nextButton.style.display = "block";
}

// Function to update button style based on correctness
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("incorrect");
    }
}

// Function to clear button styles
function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("incorrect");
}

// Function to handle clicking the next button
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
});

// Function to end the quiz and show the final score
function endQuiz() {
    questionElement.innerText = `Your score: ${score} out of ${questions.length}!`;
    nextButton.innerText = "Play Again";
    nextButton.addEventListener("click", startQuiz);
    nextButton.style.display = "block";
}
