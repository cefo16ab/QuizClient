$(document).ready(() => {

    SDK.User.loadNav();

$("#submitUser").click(() => {

    const firstname = $("#inputFirstname").val();
    const lasrname = $("#inputLastname").val();
    const username = $("#inputUsername").val();
    const password = $("#inputPassword").val();

    SDK.User.create(firstname, lasrname, username, password, (err, data) => {


    }