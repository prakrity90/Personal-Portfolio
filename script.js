
/* =========================
   DARK/LIGHT MODE
========================= */

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "🌙 Dark Mode";
    } else {
        themeButton.textContent = "☀️ Light Mode";
    }
});


/* =========================
   QUIZ ANSWERS
========================= */

const correctAnswers = {
    q1: "a",
    q2: "b",
    q3: "c",
    q4: "a",
    q5: "b"
};


/* =========================
   QUIZ SUBMISSION
========================= */

const quizForm = document.getElementById("quiz-form");

quizForm.addEventListener("submit", function (event) {

    // Prevent page from refreshing
    event.preventDefault();

    const formData = new FormData(quizForm);

    let score = 0;
    let unanswered = 0;

    // Check the answers
    for (let question in correctAnswers) {

        const selectedAnswer = formData.get(question);

        if (selectedAnswer === null) {
            unanswered++;
        } else if (selectedAnswer === correctAnswers[question]) {
            score++;
        }
    }

    // Check for unanswered questions
    if (unanswered > 0) {
        document.getElementById("quiz-result").textContent =
            "Please answer all 5 questions before submitting!";
        return;
    }

    // Friendly feedback
    let message = "";

    if (score === 5) {
        message = "Excellent! You got all 5 answers correct!";
    } else if (score >= 3) {
        message = "Good job! Keep learning and improving!";
    } else {
        message = "Keep practicing! You can try again!";
    }

    // Display the score
    document.getElementById("quiz-result").textContent =
        "Your Score: " + score + "/5. " + message;

});

