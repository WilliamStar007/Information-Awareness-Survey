// function from https://stackoverflow.com/questions/7431268/how-to-read-data-from-csv-file-using-javascript

function processData(allText) {
    const allTextLines = allText.split(/\r\n|\n/);
    const headers = allTextLines[0].split(',');
    const lines = [];

    for (let i = 1; i < allTextLines.length; i++) {
        const data = allTextLines[i].split(',');
        if (data.length === headers.length) {
            const tarr = [];
            for (let j = 0; j < headers.length; j++) {
                tarr.push(data[j]);
            }
            lines.push(tarr);
        }
    }

    return lines;
}
