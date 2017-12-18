$(document).ready(() => {

    SDK.User.loadNav();


    let quizId = SDK.getQueryParam("quizId");
    let title = SDK.getQueryParam("title");
    console.log("myQuizId",quizId);
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


                    $("#"+question.questionId).append(`<p><input type="radio" class="custom-control-input" name="${choice.choiceId}" value="${choice.answer}"> ${choice.choiceTitle} </p>  `)

                    //todo: print choice

            });



        });


    });
        console.log("DONE loading questions");

/*
SDK.Quiz.loadQuestions((err, data) => {
        console.log("1");
        if (err) throw err;
        console.log("1");
        var questions = JSON.parse(data);
        console.log("2",questions);

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
        });*/


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




