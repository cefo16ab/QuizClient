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

                        console.log("DIG");
                        location.reload($("#quiz-table").show());
                        // }

                    });
                }

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

                        console.log("DIG");
                        location.reload($("#quiz-table").show());
                        // }

                    });
                }

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

                        console.log("DIG");
                        location.reload($("#quiz-table").show());
                        // }

                    });
                }

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

                            console.log("DIG");
                            location.reload($("#quiz-table").show());
                            // }

                        });
                    }

                });

        });
    });


});
