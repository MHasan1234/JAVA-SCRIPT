let students = ["harry","man","woman"];
console.log(students[2]);
//ARRAYS ARE MUTABLE
let fruits = ["mango","apple","litchi"];
fruits[0] = "banana";
fruits[1] = "pineapple";
fruits[10] = "papaya";

//ARRAY METHODS
  //FROM BACK
   //PUSH 
let cars = ["audi" , "bmw" , "xuv" , "maruti"];
// let newcars = cars.push("toyota");
// console.log(newcars);
// let ncars = cars.push("ferrari");
// console.log(ncars);
   
//    //POP
// let mcars = cars.pop();
// console.log(mcars);
// let ocars = cars.pop();
// console.log(ocars);

  //FROM FRONT/START
    // UNSHIFT & SHIFT
let ucars = cars.unshift("toyota");
console.log(ucars);
let pcars = cars.shift();
console.log(pcars);    


//PRACTICE QUESTION

let months = ["january" , "july" , "march" , "august"]


// INDEX-OF 

cars.indexOf("bmw");
cars.indexOf("XUV");
marks.indexOf();

// INCLUDES


cars.includes("audi");
cars.includes("toyota");


// CONCAT 

let primary = ["red","yellow","blue"];
let secondary = ["orange","green","violet"];
let allColors = primary.concat(secondary);
console.log(allColors);

let mallColors = cars.concat(months);
console.log(mallColors);

// REVERSE

 cars.reverse();


 // SLICE

 cars.slice(1,3);
 cars.slice();
 cars.slice(-2);


 // SPLICE 

 cars.splice(3);
 cars.splice(0,1);
 cars.splice(0,0,"toyota","xuv","maruti");

 //SORT
 cars.sort();


 //CONST

 const arry = [1,2,3];

 // NESTED ARRAYS
   //num.length , num[0].length ,  num[0][0]

//questions
   let are = [7,9,0,-2];
   let ans = are.slice(0,4);
   console.log(ans);


   let ar = [7,9,0,-2];
   let an = ar.slice(-3);
   console.log(an);


   let str = prompt("enter a string");
   if (str.length == 0){
    console.log("empty string");
   }  else {
    console.log("not empty");
   }


   let cr = "cgfgdfdytfy";
   let ix = 3;
   if (cr[ix] == cr[ix].toLowerCase()){
      console.log("Character is in lowercase");
   }  else {
    console.log("character is in upper case");
   }


  let sr = prompt("enter a string");
  console.log (`original string =${sr}`);
  console.log (`string without spaces = ${sr.trim()}`);

let arr = ["hello" , 'a' , 23 , 64, 99, -6];
let item = 54;
if (arr.indexOf(item) != -1){
  console.log(" element exists");
} else {
  console.log("not exists");
}