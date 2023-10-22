$(document).ready(function () {
    const questions = [
        {
            question: "What is the capital of Canada?",
            options: ["Edmonton", "Toronto", "Vancouver", "Ottawa"],
            correctAnswer: 3,
        },
        {
            question: "Which country in next to Canada?",
            options: ["US", "Mexico", "France", "Italy"],
            correctAnswer: 0,
        },
    ];
    let currentQuestion = 0;
    let score = 0;
    function displayQuestion() {
        const questionObj = questions[currentQuestion];
        $("#question").text(questionObj.question);
        $("#options-container").empty();
        for (let i = 0; i < questionObj.options.length; i++) {
            const $option = $("<button>", {
                text: questionObj.options[i],
                class: "option",
                click: function () {
                    checkAnswer(i, questionObj.correctAnswer);
                },
            });
            $("#options-container").append($option);
        }
        $("#feedback-container").hide();
    }
    function checkAnswer(selectedIndex, correctIndex) {
        const questionObj = questions[currentQuestion];
        
        if (selectedIndex === correctIndex) {
            $("#feedback").addClass("correct").text("Correct!");
            $(".option").prop("disabled", true);
            score++;
        } else {
            $(".option").prop("disabled", true);
            $("#feedback").addClass("incorrect").html(`Incorrect. The correct answer is: ${questionObj.options[correctIndex]}`);
        }
        $("#feedback-container").show();
         $("#next-button").show();
    }
    $("#next-button").click(function () {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            displayQuestion();
            $("#next-button").hide();
            $(".option").prop("disabled", false);
            $("#feedback").removeClass("correct incorrect");
        } else {
            $("#quiz-container").html(`<p>You scored ${score} out of ${questions.length} questions.</p>`);
        }
     });
     displayQuestion();
    $("#next-button").hide();
});