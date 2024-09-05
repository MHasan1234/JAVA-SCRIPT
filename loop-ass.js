//Q.1.

// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;
// for(i=0; i< arr.length; i++) {
//     if(arr[i] == num){
//         (arr.splice(i,1));
//    }

// }

// console.log(arr);


//Q.2.

// let num = 287152;
// let count = 0;
// let copy= num;
// while(copy>0){
//     count++;
//     copy =Math.floor(copy/10);
// }
// console.log(count);


//Q.3.

// let num = 287152;
// let sum  = 0;
// let copy = num;
// while( copy > 0 ){
//     digit = copy%10;
//     sum += digit;
//     copy = Math.floor(copy/10);
// }

// console.log(sum);



//Q.4.

// let num = 3;
// let fact = 1;

// for(let i=1; i<= num; i++){
//     fact *= i;

// }
// console.log(`factorial of ${num} is ${fact}`);


//Q.5.

let arr = [ 300, 2, -80, 1000, 2, 4 , 6, 5000];
let larg = 0;
for (i=0; i< arr.length ; i++){

    if ( larg < arr[i]){
        larg = arr[i];
    
    }
}

console.log(larg);
