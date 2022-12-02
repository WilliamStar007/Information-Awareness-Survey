// global config information

let user, data, ready;

function getData(promptNum) {
    return data[promptNum-1];
}

// adapted from https://stackoverflow.com/questions/3430455/document-ready-source
ready = (function () {
    let ready_event_fired = false;
    return function (fn) {

        // Create an idempotent version of the 'fn' function
        const idempotent_fn = function () {
            if (ready_event_fired) {
                return;
            }
            ready_event_fired = true;
            return fn();
        };

        // The DOM ready check for Internet Explorer
        const do_scroll_check = function () {
            if (ready_event_fired) {
                return;
            }

            // If IE is used, use the trick by Diego Perini
            // http://javascript.nwbox.com/IEContentLoaded/
            try {
                document.documentElement.doScroll('left');
            } catch (e) {
                setTimeout(do_scroll_check, 1);
                return;
            }

            // Execute any waiting functions
            return idempotent_fn();
        };

        // If the browser ready event has already occured
        if (document.readyState === "complete") {
            return idempotent_fn()
        }

        // Mozilla, Opera and webkit nightlies currently support this event
        if (document.addEventListener) {

            // Use the handy event callback
            document.addEventListener("DOMContentLoaded", idempotent_fn, false);

            // A fallback to window.onload, that will always work
            window.addEventListener("load", idempotent_fn, false);

            // If IE event model is used
        } else if (document.attachEvent) {

            // ensure firing before onload; maybe late but safe also for iframes
            document.attachEvent("onreadystatechange", idempotent_fn);

            // A fallback to window.onload, that will always work
            window.attachEvent("onload", idempotent_fn);

            // If IE and not a frame: continually check to see if the document is ready
            let toplevel = false;

            try {
                toplevel = window.frameElement == null;
            } catch (e) {
            }

            if (document.documentElement.doScroll && toplevel) {
                return do_scroll_check();
            }
        }
    };
})();

ready(function() {
    // get user name from query parameter
    user = query();
    if (user === "null") {
        const error = document.getElementById('null-error');
        error.style.display = 'block';
        return;
    }

    // load csv file into data
    loadFile(user).then(value => {
        if (!value) {
            const error = document.getElementById('load-error');
            error.style.display = 'block';
            return;
        }
        data = processData(value);
    });

    // include necessary html file into document
    includeHTML();
});
