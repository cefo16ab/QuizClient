$(document).ready(() => {

    const $basketTbody = $("#basket-tbody");


    $("#dis-button").click(() => {

        $(".quiz-button").hide();
        $("#deleteUser").hide();
        $("#quiz-table").show();
        SDK.Quiz.findById(1, (err, data) => {
            let quizzes = JSON.parse(data);
            if (err) throw err;
            quizzes.forEach(quiz => {


                $basketTbody.append(`
                    <tr>
                       <td><a href="quiz-page.html?quizId=${quiz.quizId}&title=${quiz.quizTitle}">${quiz.quizTitle}</a></td>
                       
                    </tr>
                    `);
            });
        });
    });

    $("#it-change-button").click(() => {
        $(".quiz-button").hide();
        $("#deleteUser").hide();
        $("#quiz-table").show();

        SDK.Quiz.findById(2, (err, data) => {
            let quizzes = JSON.parse(data);
            if (err) throw err;
            quizzes.forEach(quiz => {


                $basketTbody.append(`
                    <tr>
                        <td><a href="quiz-page.html?quizId=${quiz.quizId}&title=${quiz.quizTitle}">${quiz.quizTitle}</a></td>
               
                    </tr>
                    `);
            });
        });
    });



    $("#makro-button").click(() => {
        $(".quiz-button").hide();
        $("#deleteUser").hide();
        $("#quiz-table").show();

        SDK.Quiz.findById(3, (err, data) => {
            let quizzes = JSON.parse(data);
            if (err) throw err;
            quizzes.forEach(quiz => {


                $basketTbody.append(`
                    <tr>
                        <td><a href="quiz-page.html?quizId=${quiz.quizId}&title=${quiz.quizTitle}">${quiz.quizTitle}</a></td>
               
                    </tr>
                    `);
            });
        });
    });


    $("#finance-button").click(() => {
        $(".quiz-button").hide();
        $("#deleteUser").hide();
        $("#quiz-table").show();

        SDK.Quiz.findById(4, (err, data) => {
            let quizzes = JSON.parse(data);
            if (err) throw err;
            quizzes.forEach(quiz => {

                $basketTbody.append(`
                    <tr>
                        <td><a href="quiz-page.html?quizId=${quiz.quizId}&title=${quiz.quizTitle}">${quiz.quizTitle}</a></td>
               
                    </tr>
                    `);
            });
        });
    });

    const current = SDK.User.current();

    $("#deleteUser").click(() => {

        var deletionId = current.userId;


        SDK.User.deleteUser(deletionId, (err) => {

            if (err && err.xhr.status === 401) {
                $(".form-group").addClass("has-error");
            }
            else if (err) {
                console.log("Bad stuff happened")
            } else {
                alert("Din bruger er nu slettet")
                window.location.href = "login.html";
                SDK.Storage.remove("userId");
                SDK.Storage.remove("userName");
                SDK.Storage.remove("userType");
            }



        });
    });

});
