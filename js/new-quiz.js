
$(document).ready(() => {

    $("#create-Title-Button").click(() => {
        const courseId = $(".custom-select").find("option:selected").val()
        const quizTitle = $("#inputQuizTitle").val();


        SDK.Quiz.createQuiz(courseId, quizTitle, (err, data) => {
            data = JSON.parse(data);

            console.log(err);
            if (err && err.xhr.status === 401) {
                $(".form-group").addClass("has-error");
            }
            else if (err) {
                console.log("BAd stuff happened")
            } else {
              window.location.href = ("create-question.html?quizId=" + data.quizId);

                const quizId = SDK.getQueryParam("quizId");


            }





});
                 


    });

});