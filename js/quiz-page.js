$(document).ready(() => {

    SDK.User.loadNav();


    SDK.getQueryParam("quizId")
    SDK.getQueryParam("quizTitle")


        $("#resultBtn").hide()

        //SDK request for loading selected quiz from local storage
        const selectedQuiz = SDK.Storage.load("selectedQuiz");
        $(".page-header").html(`<h1>${SDK.getQueryParam("quizId")}</h1>`);
        $(".description").html(`<h4>${selectedQuiz.quizTitle}</h4>`);

    SDK.Quiz.loadQuestions((err, data) => {
        if (err) throw err;
        var questions = JSON.parse(data);

        //For each loop for adding all the questions to the table
        questions.forEach((q) => {
            var questionTitle = q.questionTitle;
            var questionId = q.questionId;
            $(".table").append(`<div id="${questionId}"><p><b>${questionTitle}</b></p></div>`)

            //SDK request for loading all the options
            SDK.loadOptions(questionId, (err, data) => {
                if (err) throw err;
                var options = JSON.parse(data);

                //Function to mix options for a random order
                //options = shuffle(options);

                //For each loop for adding options to the specific question (with radio buttons)
                options.forEach((option) => {
                    $(`#${questionId}`).append(`<p><input type="radio" class="answer-radio" name="choice${questionId}" value="${option.answer}"> ${option.option} </p>`);
                });
            });
        });

        //Listener on return button
        $("#returnBtn").on("click", () => {
            window.location.href = "admin-page.html";
        });

        //Listener on save answer button
        $("#saveAnswerBtn").on("click", () => {
            let totalQuestions = 0;
            let correctAnswers = 0;








            });


        });

    });




