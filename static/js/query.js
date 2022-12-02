// function adapted from https://www.sitepoint.com/get-url-parameters-with-javascript/

function query(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}

function redirect() {
    const surveyID = query('SurveyID');
    const root = "https://williamstar007.github.io/Information-Awareness-Survey";

    if (document.getElementById("consent").checked)
        window.location.href = `${root}/templates/basic.html?SurveyID=${surveyID}`;
    else
        window.location.href = `${root}/templates/end.html?Status=exit`;

    return false;
}
