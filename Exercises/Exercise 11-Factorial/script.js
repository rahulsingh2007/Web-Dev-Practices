let n = 6;

/* //By reduce method
function factorial(number) {
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let c=arr.slice(1,).reduce((n,b)=>{
        return n*b
    })
    console.log(c)
}
factorial(n) */


function facFor(number) {
    let a = 1;
    for (let i = 1; i <= number; i++) {
        a = a * i;
        console.log(i)
    }
    return a
}

console.log(facFor(n))