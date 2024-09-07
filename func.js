//  A Block of code for performing a specific task

 function hello(){
    console.log("hello");

}

hello();
hello();
hello();
hello();


function printName(){
    console.log("apna college");
    console.log("mhassan");
}

printName();




function print1to5(){
    for(let i= 0 ; i<=5 ; i++ ){
        console.log(i);

    }
}

print1to5();



function  isAdult(){
    let age= 18;
    if(age>= 18){
        console.log("adult");
    } else {
        console.log("not adult");
    }
}

isAdult();


function printPoem(){
    console.log("Twinkle twinkle little star");
    console.log("How I wonder what you are");
    console.log("Up above the world so high");
    console.log("Like a diamond in the sky");
}

printPoem();



 
function diceNumber(){
    let rand = Math.floor(Math.random()*6)+1;
    console.log(rand);
    

}

diceNumber();
diceNumber();
diceNumber();
diceNumber();
diceNumber();
diceNumber();

// FUNCTIONS WITH ARGUMENTS

function printInfo (name,age){
    console.log(`${name}'s age is ${age}.`);
}

printInfo("pappu",25);
printInfo("guddu",20);


function sum(a,b){
    console.log(a+b);
}

sum(1,2);
sum(4,5);
sum(324233,346324643);



function average(a,b,c){
    // console.log(`The average of three numbers ${a} , ${b} and ${c} is ${(a+b+c)/3}`);
    let avg=(a+b+c)/3;
    console.log(avg);
}

average(1,2,3);


function table(num){
    for(let i =num ; i<= num*10 ; i = i+num){
    console.log(i);
    }
}

table(5);

// RETURN KEYWORD :-- USED TO RETURN SOME VALUE FROM THE FUNCTION.

function sum(a,b){
    console.log("hello");
    console.log("hello");
    return a+b;
    console.log("hello"); // EXECUTION STOPS IF RETURN IS USED
    console.log("hello");

    
}

console.log(sum(3,4));//sum(sum(3,4),5);



function isAdult(age){
    if(age>=18){
        return "adult";
    } else {
        return "not adult";
    }
    console.log("bye bye"); // EXECUTION STOPS IF RETURN IS USED
}

console.log(isAdult(18));



function getSum(n){
    let sum=0;
    for(let i=1 ; i<=n ; i++){
        sum += i;
    
    }
    return sum;
}

// console.log(getSum(3));



// let str  =["hi", "hello", "bye", "!"];

function concat(str){
    let result="";
    
    for(let i=0; i<=str.length; i++){
        result += str[i];
    }
    return result;
}



//  SCOPE

let sum = 54;   // GLOBAL SCOPE applied on all

function calSum(a,b){
    //let sum = a+b;   // FUNCTION SCOPE applied inside function
    console.log(sum);
}

calSum(1,2);
console.log(sum);


//  BLOCK SCOPE :-- APPLIED INSIDE CURLY BRACKETS
{
    let a =25;
}

console.log(a);


for (let i=1; i<=5; i++){
    console.log(i); // BLOCK SCOPE
}

console.log(i);


let age = 25;
if(age >= 18){
    let str = "adult"
}
console.log(str);


//  LEXICAL SCOPE :- USED IN NESTED FUNCTIONS 
// OUTER FUNCTION CAN ACCESS INNER FUNCTION BUT NOT VICE-VERSA.

// function outerFunc(){
//     let x = 5;    
//      let y= 6;
//     function innerFunc() { // funnction scope
//         let a =10;
//         console.log(x);
//         console.log(y);
        
//     }
//     console.log(a);
//     innerFunc();
    
// }

//function outerFunc(){ <<<<-------  HOISTING
// function innerFunc(){
//     console.log(x);
//     console.log(y);
//     }
//     let x =5;
//     let x =6;
//     innerFunc()
// }



// let greet = "hello"; //global scope

// function changeGreet(){
//     let greet = "hi"; // lexical scope
//     console.log(greet);

//     function innerGreet(){
//         console.log(greet); //lexical scope
//     }

//     innerGreet();
// }

// console.log(greet);
// changeGreet();



// FUNCTIONS EXPRESSIONS

// let name  ="mushir";
// let x =5;

// let sum = function(a,b){
//     return a+b;
// }

// let hello = function(){
//     console.log("hello");
// }

// hello = function(){
//     console.log("hi");
// }


// HIGH ORDER FUNCTIONS --->  A function that does one or both --> takes one or multiple functions as arguments, returns a function  
// below takes a function as func(),
function multipleGreet(func,count){ // higher order function
    for (i=0; i<=count; i++){
        func();
    }
}

let greet = function(){
    console.log("hello");
}

multipleGreet(greet,1000);// (function() {console.log("hi")},1000);

// below returns a function,

function oddOrEvenFactory(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    } else if(request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    } else {
        console.log("wrong request");
    }
}

let request = "odd"; //even



// Methods :----->> Functions used in objects

const calculator = {
    num:55,
    add: function(a,b) {
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
};

// calculator.add, calculator.sub, calculator.mul

//Shorthand
//  const calculator = {
//     add(a,b) {
//         return a + b;
//     },
//     sub(a,b) {
//         return a - b;
//     }
//  };


// ASSIGNMENT QUESTIONS
// Q.1.
let arr= [1,2,3,4,5,6,7,8,9,10];
let num= 5;

function  getArray(arr,num){
    for (let i=0; i< arr.length; i++){
        if (arr[i] > num){
            console.log(arr[i]);
        }
    }
     
}

getArray(arr,num);

//Q.2.
let stry = "abcdabcdefgggh";

function newString(str){
    let ans="";
    for (let i =0; i<str.length; i++){
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1){
            ans += currChar;
        }
    }
    return ans;
}

// newString(str);


// Q.3.

let country=["australia", "germany", "USA"];

function longString(country){
    let ansIdx = 0;
    for(let i =0; i<country.length; i++){
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if( currLen > ansLen ){
            ansIdx = i;
        }
    }
    return country[ansIdx];
}

longString(country);


// Q.4.

let str= "apnacollege";

function countVowels(str){
    let count = 0;
    for(let i =0; i< str.length; i++){
        if(
            str.charAt(i) == "a" ||
            str.charAt(i) == "e" ||
            str.charAt(i) == "i" ||
            str.charAt(i) == "o" ||
            str.charAt(i) == "u" 
        ) {
            count++;
        }
    }
    return count;
}

countVowels(str);


// Q.5.

// let start = 200;
// let end = 1000;
// function randomNumber(start,end){
//     let random = Math.floor(Math.random()*end)+start;
//     return random;
// }


let start = 200;
let end = 1000;
function randomNumber(start,end){
    let diff = end - start;
    return Math.floor(Math.random()*diff)+start;
    

}    