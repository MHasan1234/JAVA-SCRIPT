let color = "red";

if (color === "red"){
    console.log("stop");
}
else if (color === "yellow"){
    console.log("slow down");
}
else if (color === "green"){
    console.log("go");
}

//If ___Else-If---

let age=14;

if(age>=18){
    
    console.log("you can vote");

}  else if (age>= 18) {
    console.log("you cannot vote");
}  else if (age<18){
    console.log("you cannot vote2");
}

let marks = 45;

if (marks >= 80) {
    console.log("A+");
}   else if(marks >= 60){
    console.log("A");
}   else if (marks >=33){
    console.log("B");
}   else if (marks < 33){
    console.log("F");
}


let month = "january";

if (month==="january"){
    console.log("winter is here");
}   else if (month === "april"){
    console.log("summer is here");
}


//if---else

let aage = 10;
if (aage >= 18){
    console.log("you can vote");
}   else {
    console.log("you cannot vote");
}

let colour = "white";

if (colour === "red") {
    console.log("stop");
}   else if(colour === "yellow") {
    console.log("slow down");
}   else if (colour === "green") {
    console.log("go");
}   else {
    console.log("traffic light is broken");
}


let size = "XL";

if (size==="XL") {
    console.log("price is Rs. 250");
}   else if (size ==="L") {
    console.log("Price is Rs. 200");
}   else if (size === "M") {
    console.log("Price is Rs. 100");
}    else  {
    console.log("Price is Rs. 50");
}

// NESTED IF-ELSE

let maarks = 32;

if (maarks >= 33) {
    console.log("Pass");
    if(maarks >= 80) {
        console.log("Grade : O");
    } else {
        console.log("Grade : A");
    }
}   else {
    console.log("Better luck next time!");
}
    

// LOGICAL OPERATORS

let mrks = 90;

if (mrks >= 33 &&  mrks >= 80) { // (mrks >= 33 || marks >= 80)   (!marks < 33) 
    console.log("pass");
    console.log("A+"); 
} 


// PRACTICE QUESTION

let str = "apple";

if (str[0] === "a"  &&  str.length > 3) {
    console.log("good string");
}   else {
    console.log("not a good string");
}


// TRUTHY AND FALSY VALUE -> everything in JS is true or false in boolean context.
// false ,0,-0,On(BigInt value),""(empty string) ,null,undefined,Nan
let string = " ";
if(string) {
    console.log("string is not empty");
} else {
    console.log("string is empty");
}

let num=-10;
if(num) {
    console.log("num is not equal to 0");
} else {
    console.log("num is equal to 0");
}

if("") {
    console.log("it has true value");
} else {
    console.log("it ha sfalse value");
}

if(" "){
    console.log("it has true value");
} else {
    console.log("it has false value");
}


// SWITCH STATEMENT 

let culur = "red";

switch (color) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("ligt is broken");            

}

console.log("after switch stt");


// PRACTICE QUESTION ON SWITCH STATEMENT


let day = 2;

switch(day) {
    case 1 :
        console.log("Monday");
        break;
    case 2 :
         console.log("Tuesday");
         break;
    case 3 :
        console.log("Wednesday");
        break;    
    case 4 :
        console.log("Thursday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Saturday");
        break;
    case 7 :
        console.log("Sunday");
        break;
    default:
        console.log("Wrong Day");    
        
}

//ALERTS & PROMPTS


alert("something is wrong");
alert("this is a simple alert");
console.log("this is asimple message");
console.error("this is a error message");
console.warn("this is a warning message");


let firstName = prompt("enter first name : ");
console.log(firstName);

let frstName = prompt("enter your name : ");
let lastName = prompt("enter last name : ");
//console.log("Welcome", firstName, lastName, "!");
let msg = "Welcome" + firstName + " " + lastName  + "!";
alert(msg);
