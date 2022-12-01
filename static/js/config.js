// global config information

let user, data, csv;

user = 'azabani';
fetch(`../static/data/${user}.csv`).then(function(response) {
    if (response.status !== 200) {
        throw response.status;
    }
    return response.text();
}).then(function(file_content) {
    csv = file_content;
}).catch(function(status) {
    console.log('Error ' + status);
});

function getData(promptNum) {
    return data[promptNum-1];
}

function repoName() {
    return "Information-Awareness-Survey";
}

window.onload = function() {
    data = processData(csv);
    const progressBar = progressInit();
    if (progressBar !== true) {
        alert("progress bar error");
    }

    const tableInfo = populateData('Page1');
    if (tableInfo !== true) {
        alert("information load error");
    }
}