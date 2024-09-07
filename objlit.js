// const student = {
//     name : "mushir",
//     age: 23,
//     marks: 100
// };

const item = {
    price: 100,
    discount: 50,
    colors:["red","pink"]
};


const post = {
    username: "@mushirHasan",
    content:"THis is my #firstPost",
    likes:150,
    reposts:5,
    tags:["@apnacollege", "@delta"]
};


// How to Get Values

post["content"];
post["likes"];
post.tags[0];
post.content;

let prop = "reposts";
post[prop];

// OBJECT CONVERTS EVERY KEY TO A STRING

const obj = {
    1:"a",
    2:"b",
    true:"c",
    null:"d",
    undefined:"e"
};


//  ADD / UPDATE VALUES

const  student ={
    name :"mushir",
    age:23,
    marks:94.4,
    city:"delhi"

};

// student.city="mumbai";
// student.gender="female";
// student.marks="A";[99,89,74];

// delete student.marks;
// delete student.city;


// NESTED OBJECTS

const classInfo = {
    hugo :{
        grade:"A+",
        city:"Delhi"
    },
    boss :{
        grade:"A",
        city:"Pune"
    },
    man:{
        grade:"O",
        city:"Patna"
    }
};


// ARRAY OF OBJECTS

classInf= [
    {
        name:"pappu",
        grade:"A+",
        city:"Delhi"
    
    },
    {
        name:"munna",
        grade:"A",
        city:"Pune"
    },
    {
        name:"guddu",
        grade:"O",
        city:"Mumbai"
    }
];


// MATH OBJECT

Math
//Properties
Math.PI;
Math.E;
//Methods
Math.abs(); //RETURNS POSITIVE
Math.pow();// RETURNS POWER
Math.floor();// RETURNS  NEAREST SMALLEST INTEGER VALUE (-5.6)=-6
Math.ceil();// RETURNS NEARST LARGEST INTEGER VALUE  (-3.4)= -3
Math.random();// GIVESs RANDOM VALUE BETWEEN 0 TO 1

// RANDOM INTEGERS BEYOND 1

let num = Math.random();
num=num*10;
num=Math.floor(num);
num=num+1;

let rando = Math.floor(Math.random() * 10 ) + 1;
let radom = Math.floor(Math.random() * 5 ) + 1;
let rndom = Math.floor(Math.random() * 5 ) + 21;


// GUESSING GAME

// const max = prompt("enter the max number");
// const random =Math.floor(Math.random() *max) +1;
// let guess= prompt("guess the number");

// while(true){
//     if(guess=="quit"){
//         console.log("user quit");
//         break;
//     }

//     if (guess == random){
//         console.log("you are right,random number was",random);
//         break;

//     }  else if(guess<random){
//         guess=prompt("hint:your guess was too small.please try agian");

//     } else{
//         guess =prompt("hint:your guess was too large.please try again");
//     }
// }


// ASSIGNMENT QUESTIONS

let diceNumber = Math.floor(Math.random()*6)+1;
console.log(diceNumber);



const car = {
    name: "Maruti Suzuki",
    model :"Dzire",
    color:"Black"

};
console.log(car.name);



const Person = {
    name: "Pappu",
    age:"26",
    city:"Patna"

};
// console.log(Person.city="New York");
// console.log(Person.country="United States");

Person.city="New York";
Person.country="United States";
console.log(Person);