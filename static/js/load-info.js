window.onload = function() {
    let account = "fantasai";
    let name = "Delan Azabani";
    let email = "dazabani@igalia.com";
    let date = "2022/10/11";
    let repo = "w3c/csswg-drafts";
    let sign = true;

    document.getElementById('account').innerHTML = account;
    document.getElementById('name').innerHTML = name;
    document.getElementById('email').innerHTML = email;
    document.getElementById('date').innerHTML = date;
    document.getElementById('repo').innerHTML = repo;
    document.getElementById('sign').innerHTML = sign ? "True" : "False";

    return false;
}