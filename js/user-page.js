$(document).ready(() => {

    const $basketTbody = $("#basket-tbody");


    $("#dis-button").click(() => {

        $(".quiz-button").hide();
        $("#quiz-table").show();
        SDK.Quiz.findById(1, (err, data) => {
            let quizzes = JSON.parse(data);
            if (err) throw err;
            quizzes.forEach(quiz => {
                console.log(quiz);

                $basketTbody.append(`
                    <tr>
                        <td>${quiz.quizTitle}</td>
               
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
                        <td>${quiz.quizTitle}</td>
               
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
                        <td>${quiz.quizTitle}</td>
               
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
                        <td>${quiz.quizTitle}</td>
               
                    </tr>
                    `);
            });
        });
    });


});
