$(document).ready(() => {

    SDK.User.loadNav();


    let quizId = SDK.getQueryParam("quizId");
    let title = SDK.getQueryParam("title");
    console.log("myQuizId", quizId);
    //) SDK.getQueryParam("quizTitle")


    $("#resultBtn").hide()
    $("#QuestionList").show();
    //SDK request for loading selected quiz from local storage


    $(".page-header").html(`<h1>${quizId}</h1>`);
    $(".description").html(`<h4>${title}</h4>`);


    SDK.Quiz.findQuestionById(quizId, (err, data) => {
        let questions = JSON.parse(data);
        if (err) throw err;
        questions.forEach(question => {
            console.log(question);
            //todo: print question
            $(".table").append(`<div style="color:blue;" id="${question.questionId}"><p><b>${question.questionTitle}</b></p></div>`)

            SDK.Quiz.findChoiceById(question.questionId, (err, data) => {
                let choices = JSON.parse(data);
                if (err) throw err;
                choices.forEach(choice => {
                    console.log(choice);


                    $("#" + question.questionId).append(`<p><input type="radio" class="answer-radio" name="${choice.choiceId}" value="${choice.answer}"> ${choice.choiceTitle} </p>  `)

                    //todo: print choice

                });
            });
        });
    });



    $("#saveAnswerBtn").on("click", () => {

        let totalQuestions = 0;
        let correctAnswers = 0;


        //Function to count number of questions answered
        $(".answer-radio").each(function () {
            if ($(this).is(":checked")) {
                totalQuestions++;
                //Function to count number of correct answers
                if ($(this).val() == 1) {
                    correctAnswers++;

                }
            }
            console.log(correctAnswers);
        });

//Saving percentage of correct answers as const
        const quizWidth = correctAnswers / totalQuestions * 100;

        //Modal that shows score, and makes result button appear
        $('#submitModal').modal('show');
        //Modal message with progress bar and score from quiz
        $("#result").append(`
                    <div><div class="progress">
                    <div class="progress-bar progress-bar-info progress-bar-striped" style="width:${quizWidth}%"></div></div>
                    <p>You got <b>${correctAnswers}</b> out of <b>${totalQuestions}</b> questions correct.</p>
                    <p> You can now click on 'Show results' to see the correct answers on all questions.</p>`);

        //Listener on close button
        $("#closeBtn").on("click", () => {
            //Clearing the html of submit modal
            $("#result").html("");
            $('#submitModal').modal('hide');
        });

        $("#resultBtn").show()
    });

    //Listener on result button
    $("#resultBtn").on("click", () => {
        //Result modal appears
        $('#resultModal').modal('show');

        SDK.Quiz.findQuestionById(quizId, (err, data) => {
            let questions = JSON.parse(data);
            if (err) throw err;


            //For each loop for adding all the questions to modal
            questions.forEach((question) => {

                //SDK request for adding the correct answer underneath question


                SDK.Quiz.findChoiceById(question.questionId, (err, data) => {
                    let choices = JSON.parse(data);
                    if (err) throw err;


                    choices.forEach(choice => {
                        if (choice.answer == 1) {
                            console.log(choice);
                            $('#resultDIV').append(`<div id="${question.questionId}"><p><b>${question.questionTitle}</b></p></div>`);
                            $('#resultDIV').append(`<div id="${question.questionId}"><p><b>${choice.choiceTitle}</b></p></div>`);

                        }
                    });

                });

                //Listener on close button
                $("#closeResBtn").on("click", () => {
                    //Clearing the html of result modal
                    $("#resultDIV").html("");
                    $('#resultModal').modal('hide');
                });


            });


        });

    });


});