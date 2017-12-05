$(document).ready(() => {

    SDK.User.loadNav();


    const quizId = SDK.getQueryParam("quizId");


    $("#new-question").click(() => {
       // const questionId = $("#inputQuestion").val();
        const questionTitle = $("#inputQuestion").val();




        SDK.Quiz.createQuestion( quizId, questionTitle, (err, data) => {

            data = JSON.parse(data);

            if (err && err.xhr.status === 401) {
                $(".form-group").addClass("has-error");
            }
            else if (err) {
                console.log("BAd stuff happened")
            } else {
                window.location.href = ("create-choice.html?questionId=" + data.questionId);
                //"create-question.html"
                const quizId = SDK.getQueryParam("questionId");


            }





        });


    });

});