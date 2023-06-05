const currentHref = document.location.hash;
const requiredElement = document.querySelector(currentHref);

let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(stateCheck);
        if (currentHref) {
            requiredElement.scrollIntoView();
        }
    }
}, 100);
