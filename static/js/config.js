// global config information

function repoName() {
    return "Information-Awareness-Survey";
}

window.onload = function() {
    const progressBar = progressInit();
    if (progressBar !== true) {
        alert("progress bar error");
    }

    const tableInfo = loadTables();
    if (tableInfo !== true) {
        alert("information load error");
    }
}