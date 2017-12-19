$(document).ready(() => {

  SDK.User.loadNav();

  $("#login-button").click(() => {

    const username = $("#inputUsername").val();
    const password = $("#inputPassword").val();


    SDK.User.login(username, password, (err, data) => {
        data = JSON.parse(data);
          if (err && err.xhr.status === 401) {
              $(".form-group").addClass("has-error");
          }
          else if (err){
              console.log("BAd stuff happened")
          } else {


            if(data.type === 1) {

                window.location.href = "user-page.html"

            } else {

                window.location.href = "admin-page.html";
                console.log(data);
            }


          }
    });

  });

});