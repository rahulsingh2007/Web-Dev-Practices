function formatViews(views) {
    if (views >= 1000000) {
        return (views / 1000000) + "M";
    } else if (views >= 1000) {
        return (views / 1000) + "K";
    } else {
        return views;
    }
}
function formatTime(months) {
    if (months >= 12) {
        let years = Math.floor(months / 12);
        return years + (years === 1 ? " year ago" : " years ago");
    } else {
        return months + (months === 1 ? " month ago" : " months ago");
    }
}
function createCard(title, chname, views, months, duration, thumbnail) {

    document.getElementById("title").innerText = title;
    document.getElementById("chname").innerText = chname;
    document.getElementById("views").innerText = formatViews(views) + " views";
    document.getElementById("time").innerText = formatTime(months);
    document.getElementById("duration").innerText = duration;
    document.getElementById("thumbnail").src = thumbnail;
}
createCard(
    "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73",
    "CodeWithHarry",
    727000000,
    2,
    "31:20",
    "./Assets/side.png"
);