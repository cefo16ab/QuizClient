$(document).ready(() => {

    const $basketTbody = $("#basket-tbody");
    const $NewQuizButton = $("#new-quiz")

    $("#dis-button").click(() => {

        $(".quiz-button").hide();
        $(".new-quiz").show();
        $("#quiz-table").show();
        SDK.Quiz.findById(1, (err, data) => {
            let quizzes = JSON.parse(data);
            if (err) throw err;
            quizzes.forEach(quiz => {
                console.log(quiz);

                $basketTbody.append(`
                    <tr>
                        <td><a href="quiz-page.html?quizId=${quiz.quizId}">${quiz.quizTitle}</a></td>
                      
                       <td <a>${quiz.quizId}</a></td>
                       
                       <td width="20%"><button class="quizDelBtn btn btn-danger pull-left">Delete quiz</button></td></tr>\`);
                    </tr>
                    `);

            });

        });
    });

    $("#it-change-button").click(() => {
        $(".quiz-button").hide();
        $("#quiz-table").show();

        SDK.Quiz.findById(2, (err, data) => {
            let quizzes = JSON.parse(data);
            if (err) throw err;
            quizzes.forEach(quiz => {
                console.log(quiz);

                $basketTbody.append(`
                    <tr>
                        <td><a href="quiz-page.html?quizId=${quiz.quizId}">${quiz.quizTitle}</a></td>
               
                    </tr>
                    `);
            });
        });
    });



    $("#makro-button").click(() => {
        $(".quiz-button").hide();
        $("#quiz-table").show();

        SDK.Quiz.findById(3, (err, data) => {
            let quizzes = JSON.parse(data);
            if (err) throw err;
            quizzes.forEach(quiz => {
                console.log(quiz);

                $basketTbody.append(`
                    <tr>
                        <td><a href="quiz-page.html?quizId=${quiz.quizId}">${quiz.quizTitle}</a></td>
               
                    </tr>
                    `);
            });
        });
    });


    $("#finance-button").click(() => {
        $(".quiz-button").hide();
        $("#quiz-table").show();

        SDK.Quiz.findById(4, (err, data) => {
            let quizzes = JSON.parse(data);
            if (err) throw err;
            quizzes.forEach(quiz => {
                console.log(quiz);

                $basketTbody.append(`
                    <tr>
                        <td><a href="quiz-page.html?quizId=${quiz.quizId}">${quiz.quizTitle}</a></td>
               
                    </tr>
                    `);
            });
        });
    });


});
