// functions to display survey pages

// function to load information into table cells
function populateData(pageID) {
    // use page number to retrieve data
    const data = getData(Number(pageID.match(/\d+/)[0]));
    const tbl = document.getElementById(pageID).getElementsByTagName('table')[0];
    const cells = tbl.rows[1].getElementsByTagName('td');

    for (let i = 0; i < cells.length; ++i) {
        cells[i].innerHTML = data[i];
    }

    // populate GitHub link
    const ele = document.getElementById(pageID).getElementsByTagName('a')[0];
    let link = `https://github.com/${data[4]}/commit/${data[6]}`;
    ele.setAttribute('href', link);
    ele.setAttribute('data-hover', link);
    console.log(ele);

    return true;
}

// function from https://stackoverflow.com/questions/19289105/multiple-pages-in-one-html-page
function show(elementID) {
    const ele = document.getElementById(elementID);
    if (!ele) {
        alert("no such element");
        return;
    }
    const pages = document.getElementsByClassName('page');
    for(let i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    ele.style.display = 'block';
}
