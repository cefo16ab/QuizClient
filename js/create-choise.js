$(document).ready(() => {

    SDK.User.loadNav();


    SDK.getQueryParam("questionId")

    $("#new-choice-button").click(() => {

        SDK.Quiz.createChoice((data, cb) => {


        });


    });


});