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
