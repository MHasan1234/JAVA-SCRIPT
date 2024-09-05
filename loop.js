// PRINT Odd NUMBERS

// for (let i = 1; i <= 15; i=i+2) {
//     console.log(i);

// }

// console.log("backwards");

// for(let i= 15; i >= 1 ; i=i-1) {
//     console.log(i);

// }

//PRINT EVEN NUMBERS

//  for(let i= 2; i<= 10; i=i+2){
//     console.log(i);
// }

// console.log("backwards");

// for (let j = 10; j>=2; j=j-2);{
//     console.log(j);
// }

//TABLE OF 5
//  for(let i=5;i<=50;i=i+5){
//  console.log(i);
//  }

//  let n = prompt("Write your number");
//  n = parseInt(n);

//  for (let i=n; i <=n*10; i=i+n){
//     console.log(i);
//  }


// NESTED LOOPS

// for (let k =1; k<=3; k++){
//     console.log(`outer loop ${k}`);
//     for( let m = 1;m<=3;m++){
//        console.log(m);
//     }   
     
// }

//WHILE - LOOPS

// let i =0;
// while(i<=20) {
//     console.log(i);
//     i=i+2;
// }


// let n=5;
// while(n>=1){
//     console.log(n);
//     n--;
// }


// //fAVOURITE mOVIE gAME

// const favMovie ="avatar";

// let guess = prompt("guess my favourite movie");

// while( (guess!= favMovie) && (guess != "quit") ){
//     guess = prompt("wrong guess , please try again");
// }

// if (guess == favMovie){
//     console.log("congrats!");
// }  else {
//     console.log("you quit");
// }


//BREAK

// let i =1;
// while(i<=5){
//     if(i==3){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// console.log("we used break at 3");


// //FAVOURITE MOVIE USING BREAK

// const favMovie = "avatar";

// let guess = prompt("guess my favourite game");
//  while(guess != favMovie ) {
//     if(guess == "quit"){
//         console.log("you quit");
//         break;
//     }
//     guess = prompt("wrong guess ,please try again");
//  }

//  if (guess == favMovie){
//     console.log("congrats!");
//  }


 // LOOPS WITH ARRAYS

//  let fruits = ["mango" ,"apple" , "banana" , "litchi" , "orange"]
//  fruits.push("pineapple");

// //  for (let i =0; i<fruits.length; i++){
// //     console.log(i,fruits[i]);
// //  }

// for(let i = fruits.length-1;i >=0;i--){
//     console.log(i,fruits[i]);
// }



//LOOPS WITH NESTED ARRAYS

// let heroes = [["ironman","spiderman","thor"],
//             ["spiderman","wonder woman","flash"]]

// for (let i=0; i<heroes.length; i++){
//     console.log(i,heroes[i],heroes[i].length);
//     for(let j=0; j<heroes[i].length ; j++){
//         console.log( `j=${j} , ${heroes[i][j]}` );
//     }
// }

// let student = [ [ "hugo",95] , ["boss",94.4] , ["mario",100] ];

// for (let i=0; i<student.length; i++){
//     console.log(`info of student #${i+1}`);
//     for (let j=0; j<student[i].length; j++){
//         console.log(student[i][j]);
//     }
// }

// FOR - Of LOOPS

// let fruits = ["mango" , "apple" , "banana" , "orange" , "litchi" ];

// for(fruit of fruits){
//     console.log(fruit);
// }

// for(char of "apnacollege") {
//     console.log(char);
// }

// // NESTED F0R-OF-LOOP

// let heroes = [["ironman","spiderman","thor"],
//              ["spiderman","wonder woman","flash"]];

// for(list of heroes){
//     for(hero of list){
//     console.log(hero);
//     }
// }             





