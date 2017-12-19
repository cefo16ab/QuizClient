$(document).ready(() => {

    SDK.User.loadNav();



    const quizId = SDK.getQueryParam("quizId");
    const questionId = SDK.getQueryParam("questionId");


    $("#new-choice-button").click(() => {

        const choiceTitle = $("#inputChoice").val();
        const answer = $(".custom-select").find("option:selected").val();

        SDK.Quiz.createChoice(questionId, choiceTitle, answer,(err, data) => {
            console.log(data);
            data = JSON.parse(data);


                if (err && err.xhr.status === 401) {
                    $(".form-group").addClass("has-error");
                }
                else if (err) {
                    console.log("BAd stuff happened")
                } else {
                    // clear text
                    $("#inputChoice").val("");
                    alert("You have now saved the choice. You can now write a new one");
                    window.location.href = ("create-choice.html?questionId=" + data.questionId + "&quizId=" + data.quizId);

                    const questionId = SDK.getQueryParam("questionId");
                    const quizId = SDK.getQueryParam("quizId");
                }

        });

    });
        $("#back-to-create-question").click(() => {
            const quizId = SDK.getQueryParam("quizId");
            console.log(quizId);
            window.location.href = ("create-question.html?quizId=" + quizId);
            //const quizId = SDK.getQueryParam("quizId");
        });


        $("#finish-quiz-button").click(() => {


            window.location.href = ("admin-page.html");




        });



});

