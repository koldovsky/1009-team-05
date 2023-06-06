const currentHref = document.location.hash;

let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(stateCheck);
        if (currentHref) {
            const requiredElement = document.querySelector(currentHref);
            requiredElement.scrollIntoView();
        }
    }
}, 100);
