// ARRAY METHODS =>same as for of loop-> takes values as callback and thenn returns them

let arry =[1,2,3,4,5];

arry.forEach((el) => {
    console.log(el);
});

// arr.forEach (function(el){
//     console.log(el);
// });

// let print = function (el) {
//     console.log(el);
// };

// arr.forEach(print);

// let arr = [
//     {
//       name: "pappu",
//       marks: 95,
//     },
//     {
//       name: "munna",
//       marks: 56,
//     },
//     {
//       name: "guddu",
//       marks: 92,
//      },
// ];

// arr.forEach((student) => {
//     console.log(student.marks);
// });

// MAP =>  same as forEach but makes a new array with same size as th original array but {returns} a new array by performing some operation.
let num = [1, 2, 3, 4];

let double = num.map((el) => {
  return el * el;
});

console.log(double);

let students = [
  {
    name: "pappu",
    marks: 95,
  },
  {
    name: "munna",
    marks: 56,
  },
  {
    name: "guddu",
    marks: 92,
  },
];

let gpa = students.map((el) => {
  return el.marks / 10;
});

console.log(gpa);

// FILTER => USED AS THE ABOVE BUT IT CONSISTS OF CONDITIONAL RETURN STATEMENT

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let ans = nums.filter((el) => {
  // return el % 2 != 0;  // even -> true, odd -> false
  return el < 5;
});

// EVERY => SAME AS LOGICAL AND , EVERY SINGLE ELEMENT OF THE ARRAY IS CHECKED WITH THE CONDITION
//          AND EVEN IF ONE ELEMENT IS WRONG THEN THE RETURN VALUE WOULD BE
//          FALSE FOR THE WHOLE CONDITION.

[2, 4, 6].every((el) => el % 2 == 0);
[2, 4, 6, 8].every((el) => el % 2 == 0);
[2, 4, 6, 8, 1].every((el) => el % 2 == 0);
[2, 4, 6, 8, 1].every((el) => el % 2 != 0);
[3, 5, 1].every((el) => el % 2 != 0);

// SOME => SAME AS LOGICAL OR , EVERY SINGLE ELEMENT OF THE ARRAY IS CHECKED WITH THE CONDITION
//          AND EVEN IF ONE ELEMENT IS CORRECT THEN THE RETURN VALUE WOULD BE
//          TRUE FOR THE WHOLE CONDITION.

[1, 2, 3, 4].some((el) => el % 2 == 0);
[1, 2].some((el) => el % 2 == 0);

// REDUCE => IT REDUCES THE ARRAY TO A SINGLE VALUE , BY USING AN ACCUMULATOR
//     IN WHICH THE ELEMENT IS STORED AND THE SPECIFIED FUNCTION IS PERFORMED ON THE
//     ELEMENT. THE FINAL VALUE IS OBTAINED TILL THE LAST ELEMENT IS TAKEN IN THE ACCUMULATOR.

let noms = [1, 2, 3, 4, 7];
let finalVal = noms.reduce((res, el) => {
  console.log(res);
  return res + el;
});
console.log(finalVal); // => THIS LOGIC SHOWS THE ADDITION OF THE ELEMENTS OF AN ARRAY.

// let arr = [1,2,3,1];

// let max = -1;
// for (let i = 0; i < arr.length; i++){
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

// let max = arr.reduce((max, el) =>  {
//   if (max < el) {
//     return el;
//   } else {
//     return max;

//   }
// });

// console.log(max);

//PRACICE
let axr = [12, 10, 30, 5, 70, 3, 4];
let ten = axr.every((el) => el % 2 == 0);
console.log(ten);



function getMin(arrr) {
  let min = arrr.reduce((min, el) => {
    if (min < el) {
      return min;
    } else {
      return el;
    }
  });
  return min;
}
let arrr = [1, 2, 3, 1, 6, 0];


// DEFAULT PARAMETERS => A FIXED VALUE IS ASSIGNED TO THE SECOND VARIABLE

function sum (a,b=2){
  return a+b;
}

// sum(1,3);//4 IF A IS also  ASSIGNED 2 
// sum(1); //a=1 , b= undefined


//SPREAD => USED TO ACCESS INDIVIDUAL ELEMENTS FROM ITERABLE STRUCTURES LIKE ARRAYS,
//        STRINGS AND PERFORMING OPERATIONS AND FUNCTIONS ON THEM (THE STRUCTURES) BY  
//        ONLY  USING THE SPREAD FUNCTION ,THUS PREVENTING THE USE OF LOOPS
//        ALSO IT WOULD SPREAD THE OUTPUT ELEMENTS.        


Math.min(1,2,3);

let aur = [1,2,3,4,5,6,7,8,0];
Math.min(...aur);
aur.push(-1);
Math.min(...aur);
Math.max(...aur);

console.log(aur);
console.log(...aur);
console.log(1,2,3,1);
console.log("apnacollege");
console.log(..."apnacolllege");

// SPREAD (ARRAY LITERALS)

let aray = [1,2,3,4,5];
let newArr = [...aray];

let chars = [..."hello"];

let odd =[1,3,5,7,9];
let even =[2,4,6,8,10];

let mum = [...even, ...odd];


// SPREAD (OBJECT LITERALS)

const data = {
  email: "ironman@gmail.com",
  password: "abcd"
};

const dataCopy = {...data, id: 123, country: "India"};

let arr = [1,2,3,4,5]; //val
let obj1 = {...arr }; //obj -> key:val

let obj2 = {..."hello"}; // IN ALL THESE INDEX BECOMES KEY AND THE VALUE BECOMES THE CHARACTER



// REST => ALLOWS A FUNCTION TO TAKE INDEFINITE NUMBER OF ARGUMENTS AND BUNDLE THEM IN AN ARRAY.

function sum(...args) {
  //arguments => arguments object is a special, built-in object available inside all functions that provides access to the function's arguments. 
  for (let i =0; i < args.length; i++){
    console.log("you gave us:", args[i]);
  }
}

function min() { //min(a,b,c,d) can be omitted HERE rest is not used
  console.log(arguments);
  console.log(arguments.length);
  arguments.push(1);
}


function sum(...args){ // this returns the sum of the args array
  return args.reduce((sum,el) => sum + el);
}


function min(msg, ...args){// ...args should always be at  last 
  console.log(msg);
  return args.reduce((min,el) => {
    if(min < el){
      return min;
    } else {
      return el;
    }
  });
}


// DESTRUCTURING => STORING VALUES OF ARRAY INTO MULTIPLE VARIABLES

let names = ["tony", "bruce", "peter", "steve"];

// let winner = names[0];
// let runnerup = names[1];
// let secondrunnerup = names[2];

// let [winner , runnerup,secondRunnerup] = names;
let [winner , runnerup, ...others] = names;  // the values will be returned based on the index number of the array.


const student = {
  name:"mushr",
  age:14,
  class:9,
  subjects:["hindi", "english", "math", "science"],
  username: "mushr@123",
  password:"abcd",
  city:"Pune",
};

// let username = student.username;
// let password = student.password;

let {username: user, password: secret, city:place = "Mumbai"} = student;



// ASSIGNMENT QUESTIONS  => LECTURE 8
 
//Q.s.1.

let array = [1,2,3,4,5,6,7];
let sqrArray = array.map((el) => {
  return el * el;
});
console.log(sqrArray);

let sumArray = sqrArray.reduce((res,el) =>{
  return res + el;
});
console.log(sumArray);

let avg = sumArray / array.length;
console.log(avg);


//Q.s.2.

let ar = [1,2,3,4,5];

let newAr = ar.map((el) => el + 5);
console.log(newAr);


//Q.s.3.

let word = ["abdul", "kalam", "azad"];
console.log(word.map((el) => el.toUpperCase()));

//Q.s. 4.

const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((el) => el * 2)
];


//Q.s. 5.

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
mergeObjects({ a: 1, b:2 }, {c:3, d:4});

