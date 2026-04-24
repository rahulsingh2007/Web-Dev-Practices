let a = parseInt(prompt("Enter first number"))
let b = parseInt(prompt("Enter second number"))
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is an error.")
}
let sum = a + b

let x = 1;
function main() {

    try {
        console.log("The sum is ", sum * x);
        return true;
    } catch (error) {
        console.log('Error');
        return false;
    }
    finally {
        console.log('Files are being closed and db connection also.');
    }
}
let c = main()

