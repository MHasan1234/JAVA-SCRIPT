// TRIM METHODS

// let msg = " he llo ";


// let password = prompt("set your password");
// let newPass = password.trim();
// console.log(newPass);


// UPPER & LOWER CASES

// let name = "JAVA SCRIPT";
// let msg = "error";

// console.log(msg.toUpperCase());

//INDEX-OF ARGUMENT
let mesg = "ILoveCoding";
console.log(mesg.indexOf("ove"));


// METHOD CHAINING

//let msg = "      hello    ";
// let newMsg = msg.trim();
// console.log("after trim : ", newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("after upperCase : ", newMsg);
// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);



// SLICE METHOD

let msg = "howareyou";
console.log(msg.slice(1,4));
console.log(msg.slice(-3));//11-3=8

// REPLACE METHOD

let mss = "IloveCoding";
console.log(mss.replace("love","do"));
console.log(mss.replace('o', 'x'));

// REPEAT METHOD

let fruit = "Mango";
console.log(fruit.repeat(5));
console.log(fruit.repeat(10));

// PRACTICE QUESTIONS

let hel = "help";
console.log(hel.trim().toUpperCase())

let name ="ApnaCollege";
// console.log(name.slice(4).replace('l' , 't'));
// let newName = name.slice(4).replace('l' , 't');
// console.log(newName.replace('l','t'));
console.log(name.slice(4).replace('l','t').replace('l','t'));