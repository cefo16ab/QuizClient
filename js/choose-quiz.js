$(document).ready(() => {

    SDK.User.loadNav();
    const $basketTbody = $("#basket-tbody");


SDK.Quiz.findById((err, quiz) => {

    if(err) throw err;
    quiz.forEach(quiz => {
        console.log(quiz);

        $basketTbody.append(`
        <tr>
            <td>${quiz.id}</td>
   
        </tr>
        
      `);
    });
});





});