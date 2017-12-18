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
                     <td id="deleteQuizButton"><a>${quiz.quizId}</a></td>
                        <td><a href="quiz-page.html?quizId=${quiz.quizId}">${quiz.quizTitle}</a></td>
                         <td id="deleteQuizButton"><button>Delete</button></td>
                    </tr>
                    <input class="form-control" id="deleteQ" >
                    `);

                $("#deleteQuizButton").click(() => {


                    if (confirm('Are you sure you want to delete quiz with ID ' + "?")) {
                        SDK.Quiz.deleteQ(quiz, (err) => {
console.log(data.quizId);
                            if (err) {
                                alert("Quiz was not deleted. Error occurred (" + err + ").");
                                $('#deleteQuizUserInput').val("");
                            } else {
                                alert("Quiz (ID) has been deleted!");

                                //$("#basket-tbody").find('tr[data-id=' + quiz + ']').remove();
                            }

                        });

                    } else {
                        $('#deleteQuizUserInput').html("");
                        alert("The quiz was not deleted.")
                    }


                });
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
                     <td id="deleteQuizButton2"><a>${quiz.quizId}</a></td>
                        <td><a href="quiz-page.html?quizId=${quiz.quizId}&title=${quiz.quizTitle}">${quiz.quizTitle}</a></td>
                         <td> <button class="deleteQuizButton btn" data-id="${quiz.quizId}">Delete</button></td>
                    </tr>
                    `);
            });
                $('.deleteQuizButton').on('click', function () {
                    if (window.confirm("Do you want to delete this quiz?")) {
                        let id = $(this).data("id");
                        console.log(id)


                        SDK.Quiz.deleteQuiz(id, (err) => {
                            if (err && err.xhr.status === 401) {
                                $(".form-group").addClass("has-error");
                            }
                            else if (err) {
                                console.log("BAd stuff happened")
                            } else {
                                alert("The quiz has now been deleted")
                            }
                            // if (err) {
                            //   alert("Quiz was not deleted. Error occurred (" + err + ").");

                            //} else {
                            //  alert("Quiz (ID " + quizId + ") has been deleted!");

                            //  $("#modal-tbody").find('tr[data-id=' + deletionQuizID +']').remove();

                            console.log("DIG");
                            location.reload($("#quiz-table").show());
                            // }

                        });
                    }

                });

        });
    });


});
