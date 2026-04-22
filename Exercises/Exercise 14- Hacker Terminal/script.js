function startDots(id, baseText) {
    let text = document.getElementById(id);
    let dots = "";

    return setInterval(() => {
        if (dots.length === 3) {
            dots = "";
        } else {
            dots = dots + ".";
        }
        text.innerText = baseText + dots;
    }, 500);
}
setTimeout(() => {
    startDots("step1", "Initializing Hacking");
}, 1500);

setTimeout(() => {
    startDots("step2", "Reading your Files");
}, 3000);

setTimeout(() => {
    startDots("step3", "Password Files Detected");
}, 4500);

setTimeout(() => {
    startDots("step4", "Sending All Passwords and Personal Files to Server");
}, 6000);

setTimeout(() => {
    startDots("step5", "Cleaning up");
}, 7500);