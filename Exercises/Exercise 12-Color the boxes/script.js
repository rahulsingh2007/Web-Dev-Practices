console.log("Script.js initialized")

let boxes = document.getElementsByClassName("box")

function getRandomBackgroundColor(){
    let val1 = Math.random()*255;
    let val2 = Math.random()*255;
    let val3 = Math.random()*255;
    return `rgb(${val1},${val2},${val3})`
}
function getRandomColor(){
    let val4 = Math.random()*255;
    let val5 = Math.random()*255;
    let val6 = Math.random()*255;
    return `rgb(${val4},${val5},${val6})`
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomBackgroundColor()
    e.style.color = getRandomColor()
})
/* document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "red";
    e.style.color = "white";
}); */