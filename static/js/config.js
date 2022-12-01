// global config information

let user = "";
let data = [["fantasai", "Delan Azabani", "dazabani@igalia.com", "2022/10/07", "w3c/csswg-drafts", "True"],
        ["annevk", "Delan Azabani", "dazabani@igalia.com", "2022/10/11", "w3c/csswg-drafts", "True"]];

function getData(promptNum) {
    return data[promptNum-1];
}

function repoName() {
    return "Information-Awareness-Survey";
}

window.onload = function() {
    const progressBar = progressInit();
    if (progressBar !== true) {
        alert("progress bar error");
    }

    const tableInfo = populateData('Page1', getData(1));
    if (tableInfo !== true) {
        alert("information load error");
    }
}