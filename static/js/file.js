//

async function loadFile(filename) {
    return await fetch(`../static/data/${user}.csv`).then(function (response) {
        if (response.status !== 200) {
            throw response.status;
        }
        return response.text();
    }).then(function(file_content) {
        return file_content;
    }).catch(function (status) {
        console.log('Error ' + status);
    });
}
