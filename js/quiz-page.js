$(document).ready(() => {

    SDK.User.loadNav();


    let quizId = SDK.getQueryParam("quizId");
    let title = SDK.getQueryParam("title");




    $("#resultBtn").hide()
    $("#QuestionList").show();



    $(".page-header").html(`<h1>${title}</h1>`);



    SDK.Quiz.findQuestionById(quizId, (err, data) => {
        let questions = JSON.parse(data);
        if (err) throw err;
        questions.forEach(question => {


            $(".table").append(`<div style="color:blue;" id="${question.questionId}"><p><b>${question.questionTitle}</b></p></div>`)

            SDK.Quiz.findChoiceById(question.questionId, (err, data) => {
                let choices = JSON.parse(data);
                if (err) throw err;
                choices.forEach(choice => {



                    $("#" + question.questionId).append(`<p><input type="radio" class="answer-radio" name="${choice.choiceId}" value="${choice.answer}"> ${choice.choiceTitle} </p>  `)



                });
            });
        });
    });
    const current = SDK.User.current();
    $("#returnBtn").on("click", () => {

        var back = current.type;

        if(back==2){

            window.location.href = "admin-page.html";
        } else{

            window.location.href = "user-page.html";
        }

    });

    $("#saveAnswerBtn").on("click", () => {

        let totalQuestions = 0;
        let correctAnswers = 0;



        $(".answer-radio").each(function () {
            if ($(this).is(":checked")) {
                totalQuestions++;

                if ($(this).val() == 1) {
                    correctAnswers++;

                }
            }

        });


        const quizWidth = correctAnswers / totalQuestions * 100;


        $('#submitModal').modal('show');

        $("#result").append(`
                    <div><div class="progress">
                    <div class="progress-bar progress-bar-info progress-bar-striped" style="width:${quizWidth}%"></div></div>
                    <p>You got <b>${correctAnswers}</b> out of <b>${totalQuestions}</b> questions correct.</p>
                    <p> You can now click on 'Show results' to see the correct answers on all questions.</p>`);


        $("#closeBtn").on("click", () => {
            //Clearing the html of submit modal
            $("#result").html("");
            $('#submitModal').modal('hide');
        });

        $("#resultBtn").show()
    });


    $("#resultBtn").on("click", () => {

        $('#resultModal').modal('show');

        SDK.Quiz.findQuestionById(quizId, (err, data) => {
            let questions = JSON.parse(data);
            if (err) throw err;



            questions.forEach((question) => {

                SDK.Quiz.findChoiceById(question.questionId, (err, data) => {
                    let choices = JSON.parse(data);
                    if (err) throw err;


                    choices.forEach(choice => {
                        if (choice.answer == 1) {

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