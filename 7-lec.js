// THIS KEYWORD -->  an object that is executing the current piece of code.

const studnt = {
    name:"mushir",
    age:23,
    eng:95,
    math:93,
    phy:97,
    getAvg(){
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

function getAvg() {
    console.log(this);
}


// TRY AND CATCH
//try --> allows a block of code to be tested for errors while executed , catch --> allows a block of code to be tested for errors while executed IF an error occurs,

console.log("hello");
console.log("hello");
// let a=5;
try {
    console.log(a);
}  catch(err){
     console.log("caught an error.. a is not defined");
     console.log(err);
}
console.log("hello2");
console.log("hello2");
console.log("hello2");

// ARROW FUNCTIONS

// const sum = (a,b) => {
    // console.log(a+b);
// };

// const cube = (n) => {
//     return n * n * n;
// };

const pow= (a,b) => {
    return a**b;
};

const hello = () => {
    console.log("hello world");
}

// Implicit return in Arrow function => when simple arithmetic is performed

const sum = (a,b) => (a+b);
const cube = (n) => (n*n*n);
const mul = (a,b) => a*b;


// SET -TIMEOUT FUNCTION -> USED TO SET TIMER FOR EXECUTION OF CALLBACK FUNCTION

console.log("hi there!");

setTimeout(  () =>{
    console.log("Apna College");
},4000);

console.log("Welcome to");
console.log("Welcome to");
console.log("Welcome to");
console.log("Welcome to");
console.log("Welcome to");


//  SET -INTERVAL FUNCTION -> USED TO SET TIMING INTERVAL FOR REPETITIVE EXECUTION OF CALLBACK FUNCTION
//DUE TO WHICH IT GETS EXECUTED AFTER THE SPECIFIED TIME INTERVAL.


// console.log("High there!");

// let id = setInterval( () =>{
//     console.log("Apna College");
// },2000 );

// console.log(id);

// let id2 = setInterval( () =>{
//     console.log("Hello World");
// }, 3000);

// console.log(id2);

// clearInterval(id);
// clearInterval(id2);



//  THIS KEYWORD WITH [ARROW FUNCTIONS] FOLLOW LEXICAL SCOPE (IN NESTED FUNCTIONS)  CALL OF PARENTS SCOPE IS INHERITED
// WHILE IN  NORMAL FUNCTION THE SCOPE OF THIS IS CALLING OBJECT OR THE OBJECT FROM WHICH WHICH IT HAS TO CALL 

// for normal function -> obj.func = student.getName,this= student JO CALL KIYA USKA HI THIS
// for arrow function -> obj.func = window  JO CALLL KIYA USKE THIS KA THIS
// 

const student ={
     name:"mushir",
     marks:95,
     prop:this, //global scope
     getName: function () {
        console.log(this);// STUDENT KI OBJECT(CALLING OBJECT) TEENO OBJECT
        return this.name;
     },
     getMarks: () => {
        console.log(this);// PARENT KA SCOPE -> WINDOW
        return this.marks;
     },
     getInfo1: () => {
        setTimeout(() => {
            console.log(this); //student
        }, 2000);
     },
     getInfo2: function () {
        setTimeout(function ()  {
            console.log(this); //window
        }, 2000);
     },
     
};
const a =5;//global scope


//PRACTICE QUESTIONS
const square = n => n*n;
console.log(square(4));



let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clear interval ran");
}, 10000);


// ASSIGNMENT :=>

// let arr = [1,2,3,4];

// const arrayAverage = (arr) =>{
//     let arrSum= 0;
//     for (let i =0; i<arr.length; i++){
//         arrSum += arr[i];

//     }
//     return arrSum/arr.length;
// }

// arrayAverage(arr);


const arrayAverage = (arr) => {
    let total = 0;
    for (let number of arr) {
        total += number;
    }
    return total / arr.length;
};

let arr = [1,2,3,4,5,6];
console.log(arrayAverage(arr));


let num = 4;
const isEven = (num) => num % 2 == 0;



const object = {
    message: 'Hello, World!',

    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);