$(document).ready(() => {

    SDK.User.loadNav();

    $("#submitUser").click(() => {

    const firstName = $("#inputFirstname").val();
    const lastName = $("#inputLastname").val();
    const userName = $("#inputUsername").val();
    const password = $("#inputPassword").val();
    const type = 1;

    SDK.User.createUser(firstName, lastName, userName, password, type, (err, data) => {
                console.log(firstName + lastName + userName + password + type);



                if (err && err.xhr.status === 401) {
                    $(".form-group").addClass("has-error");
                }
                else if (err) {
                    console.log("BAd stuff happened")
                } else {

                    if (!userName || !password) {
                        window.alert("Username or password has not been typed. Please try again");

                    } else {
                        alert("your account has successfully been created");
                        window.location.href = ("login.html");


                    }

                }


            });


    });
    });