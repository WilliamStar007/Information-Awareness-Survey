// function to load information into table cells

function populateData(pageID, data) {
    const tbl = document.getElementById(pageID).getElementsByTagName('table');
    const cells = tbl[0].rows[1].getElementsByTagName('td');

    for (let i = 0; i < cells.length; ++i) {
        cells[i].innerHTML = data[i];
    }
}

function loadTables() {
    const data = [["fantasai", "Delan Azabani", "dazabani@igalia.com", "2022/10/07", "w3c/csswg-drafts", "True"],
        ["annevk", "Delan Azabani", "dazabani@igalia.com", "2022/10/11", "w3c/csswg-drafts", "True"]];

    for (let i = 0; i < data.length; ++i) {
        populateData(`Page${i+1}`,data[i]);
    }

    return true;
}
