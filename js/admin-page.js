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
                        <td><a href="quiz-page.html?quizId=${quiz.quizId}">${quiz.quizTitle}</a></td> 
                        <td class="deleteQuizButton btn"><button>Delete</button></td>
                     </tr>
                    
                    `);
            });
            //class="quizDelBtn btn pull-left"
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
                         <td class="deleteQuizButton btn"><button>Delete</button></td>
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
                         <td class="deleteQuizButton btn"><button>Delete</button></td>
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
                         <td class="deleteQuizButton btn"><button>Delete</button></td>
                    </tr>
                    `);

                $('.deleteQuizButton').on('click', function () {

                    if(window.confirm("Are you sure you want to delete this quiz?")){
                        var Quiz = $(this).closest("tr").find("td:eq(0)").text();
console.log("HEJ");
                        for (var i = 0; i < quizzes.length; i++){
                            if (Quiz===quizzes[i].quizId){
                                SDK.Storage.persist("selectedQuiz", quizzes[i]);
                                console.log(quizzes[i]);
                            }
                        }

                        SDK.Quiz.deleteQuiz((err, data)=>{
                            console.log("DIG");
                            location.reload($("#quiz-table").show());

                        });

                    }

                });
            });
        });
    });


});
