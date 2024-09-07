//CALL STACK
function hello () {
    console.log("inside hello fnx");
    console.log("hello");
}

function demo() {
    console.log("calling hello fnx");
    hello();
}

console.log("calling demo fnx");
demo();
console.log("done,bye!");

// VISUAIZING CALL - STACK

function one() {
    return 1;
}

function two(){
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans); 
}

three();

// SINGLE THREADED NATURE OF JAVASCRIPT 
// SYNCHRONOUS NATURE OF JS
let a = 10;
console.log("a");
let b = 25;
console.log("b");
console.log("c");

// ASYNCHRONOUS NATURE OF JS

setTimeout(()=> {
    console.log("hello how are u");
}, 2000);

setTimeout(()=> {
    console.log("hello world");
}, 2000);

console.log("HELLO");

