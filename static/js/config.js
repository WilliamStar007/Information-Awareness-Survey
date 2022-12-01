// global config information

let user, data;

user = 'azabani';

function getData(promptNum) {
    return data[promptNum-1];
}

function repoName() {
    return "Information-Awareness-Survey";
}

window.onload = function() {
    loadFile("azabani").then(value => {
        data = processData(value);
    });

    const progressBar = progressInit();
    if (progressBar !== true) {
        alert("progress bar error");
    }
    //
    // const tableInfo = populateData('Page1');
    // if (tableInfo !== true) {
    //     alert("information load error");
    // }
}