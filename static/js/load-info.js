// function from https://stackoverflow.com/questions/7431268/how-to-read-data-from-csv-file-using-javascript

function processData(allText) {
    const allTextLines = allText.split(/\r\n|\n/);
    const headers = allTextLines[0].split(',');
    const lines = [];

    for (let i = 1; i < allTextLines.length; i++) {
        const data = allTextLines[i].split(',');
        if (data.length === headers.length) {
            let tarr = [];
            for (var j = 0; j < headers.length; j++) {
                tarr.push(headers[j] + ":" + data[j]);
            }
            lines.push(tarr);
        }
    }
    console.log(lines);
}



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