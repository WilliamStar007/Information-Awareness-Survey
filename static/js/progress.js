// set progress bar attribute based on number of pages

let accumulator = 0;

function progressInit() {
    const pages = document.getElementsByClassName('page');
    let bar = document.getElementById('progress');
    let percent = document.getElementById('percentage');

    if (pages.length === 0) {
        return complete();
    }

    bar.setAttribute("value", "1");
    bar.setAttribute("max", `${pages.length}`);
    percent.innerHTML = `${Math.round(1/pages.length*100)}%`;
    return true;
}

function advance() {
    if (accumulator < 0) {
        accumulator += 1;
        return;
    }
    let bar = document.getElementById('progress');
    let percent = document.getElementById('percentage');
    const val = Number(bar.getAttribute("value"));
    const max = Number(bar.getAttribute("max"));

    bar.setAttribute("value", `${val+1}`);
    percent.innerHTML = `${Math.round((val+1)/max*100)}%`;
}

function back() {
    accumulator -= 1;
}

function complete() {
    let bar = document.getElementById('progress');
    let percent = document.getElementById('percentage');
    const max = bar.getAttribute("max");

    bar.setAttribute("value", `${max}`);
    percent.innerHTML = "100%";
    return false;
}

function end() {
    window.location.href = `https://williamstar007.github.io/${repoName()}/templates/end.html`;
    return false;
}
