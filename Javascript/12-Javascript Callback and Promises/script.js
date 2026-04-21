/* console.log("Rahul is human.")
console.log("Rehan is human.")
setTimeout(() => {
    console.log("First second")
}, 1000);
setTimeout(() => {
    console.log("Second second")
}, 2000);
console.log("Harry is human.") */

const callback = (arg) => {
    console.log(arg)
}
const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.unload = callback("Harry");
    document.head.append(sc)
}
loadScript("https://www.youtube.com/watch?v=9JaDBYPmiJ0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=75", callback)
