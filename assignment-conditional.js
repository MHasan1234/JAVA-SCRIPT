let num = 4;

if (num % 10 == 0){
    console.log("Good");
}   else {
    console.log("Bad");
}



// let userName = prompt("Enter user name");
// let userAge = prompt("Enter user age");
// alert (` ${userName}  is  ${userAge}  years old. `);



let quarter = 3;
switch(quarter) {
    case 1 :
        console.log("january,february,march");
        break;
    case 2 :
        console.log("april,may,june");
        break;
    case 3 :
        console.log("july,august,september");
        break;
    case 4 :
        console.log("october,november,december");
        break;
    default :
        console.log("no quater");               
}


let string = "apples";

if ((string[0] === 'a' || string[0] === 'A')  &&  string.length > 5) {
    console.log("golden string");
}   else {
    console.log("not a golden string");
}



let num1 = 3;
let num2 = 6;
let num3 = 10;

if ( num1 > num2  && num1 > num3 ){
    console.log( num1, "num1 is largest");
} else if (num2 > num1 && num2 > num3){
    console.log( num2, "num2 is largest");
} else {
    console.log( num3, "num3 is largest");
}



let a = 5;
let b = 18;
let c = 13;

if(a>b) {
    if(a>c){
        console.log(a, "is largest");
    } else {
        console.log (c, "is largest");
    }
}  else {
    if (b>c) {
        console.log(b, "is largest");
    } else {
        console.log(c, "is largest");
    }
}



let no1 = 32;
let no2 = 47852;

if ( ( no1 % 10 ) == (no2 % 10) ) {
    console.log("numbers have the same last digit which is" , no1 % 10);

} else {
    console.log("numbers don't have the same last digit");
}

