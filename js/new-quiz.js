
$(document).ready(() => {

    $("#create-Title-Button").click(() => {
        const courseId = $(".custom-select").find("option:selected").val()
        const quizTitle = $("#inputQuizTitle").val();


        SDK.Quiz.createQuiz(courseId, quizTitle, (err, data) => {
            console.log(err);
            if (err && err.xhr.status === 401) {
                $(".form-group").addClass("has-error");
            }
            else if (err) {
                console.log("BAd stuff happened")
            } else {
               // window.location.href = ("create-question.html");
                //"create-question.html"
                const quizId = SDK.getQueryParam("quizId");


            }





});
                 


    });

});