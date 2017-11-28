$(document).ready(() => {

    SDK.User.loadNav();


    const quizId = SDK.getQueryParam("quizId");



    $("#new-question").click(() => {
        const inputQuestion = $("#inputQuestion");
        console.log(inputQuestion);
        SDK.Quiz.createQuestion(inputQuestion,(data, cb) => {
            console.log(inputQuestion);
            window.location.href = "user-page.html"

        });


    });

});