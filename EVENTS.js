// // let p = document.querySelector('p');

// // p.addEventListener("click", function() {
// //     console.log("Para was clicked.")
// // });
// //  // event listener can be applied on any element.
// // let box =document.querySelector(".box");
// // box.addEventListener("mouseenter", function() {
// //     console.log("Mouse inside box.")
// // });

// // 'this' in event listeners
// //  let btn =document.querySelector('button');
// //  let p =document.querySelector('p');
// //  let h1 =document.querySelector('h1');
// //  let h3 =document.querySelector('h3');

// //  function changeColor () {
// //     console.dir(this.innerText);
// //     this.style.backgroundColor = "blue";
// //  }

// //  btn.addEventListener("click",changeColor);
// //  p.addEventListener("click",changeColor);
// //  h1.addEventListener("click",changeColor);
// //  h3.addEventListener("click",changeColor);



// // EVENT or e or evt argument => object that contains data about the object
//  let btn =document.querySelector("button");

// //  btn.addEventListener("click", function(event){
// //    console.log(event);
// //    console.log("button clicked");
// //  });

// //  btn.addEventListener("dblclick", function(event){
// //    console.log(event);
// //    console.log("button clicked");
// //  });

// //  Keyboard events

// // let inp = document.querySelector("input");

// // inp.addEventListener("keydown", function(event) {
// //   console.log("key =", event.key);
// //   console.log("code =", event.code);
// //   console.log("key was pressed");
// // });

// // inp.addEventListener("keyup", function() {
// //   console.log("key was released");
// // });

// //MAKING A GAME ON SIMPLE EVENT

// // inp.addEventListener("keydown", function(event) {
// //   console.log("code = ", event.code); //ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R)
// //   if(event.code == "ArrowUp"){     //KeyU
// //     console.log("character moves forward");
// //   }else if(event.code == "ArrowDown"){  //KeyD
// //     console.log("character moves backward");
// //   } else if(event.code == "ArrowLeft"){   //KeyL
// //     console.log("character moves left");
// //   } else if(event.code == "ArrowRight"){   //KeyR
// //     console.log("character moves right");
// //   } 
  
// // });

// // FORM EVENTS
// let form = document.querySelector("form");

// // form.addEventListener("submit", function(event) {
//   // console.log("form submitted");
//   event.preventDefault(); ///  WILL PREVENT ACTION PERFORMED BY THE CURRENT EVENT
//   // alert("form submitted");
//   //console.dir(form);

// //EXTRACTING FORM DATA
// // let inp = document.querySelector("input");
// // console.dir(inp);
// // console.log(inp.value);  /// .value shows the value of the input and not the innerText 
// // });

// // let user = this.elements[0]; // form.elements[0]; //document.querySelector("#user");
// // let pass = this.elements[1]; // form.elements[1]; //document.querySelector("#pass"); /// both inputs:- user and pass are selected

// // console.log(user.value);
// // console.log(pass.value);  /// values of both user and pass are shown

// // alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });


// //MORE EVENTS:---

// // CHANGE EVENT

// // let user = document.querySelector("#user");

// // user.addEventListener("change", function() {
// //   console.log("change event");
// //   console.log("final value =",this.value);
// // });
// // user.addEventListener("input", function(){
// //   console.log("input event");
// //   console.log("final value =", this.value);
// // });  


// //TEXT EDITOR

// let inp =document.querySelector("input");
// let p =document.querySelector("p");

// inp.addEventListener("input", function(){
//   console.log(inp.value);
//   p.innerText = inp.value;
// })


/// ASSIGNMENT

//Q.1.
// mouseout 

// let displayBox =document.querySelector("div");
// myDiv.addEventListener("mouseout",function(){
//   this.style.backgroundColor ="red";

//   setTimeout(() => {
//     this.style.backgroundColor = "lightblue";
//   },500);
// });

//keypress
// let text =document.querySelector("input");
// text = addEventListener("keypress", function(event) {
//   this.textContent = `You pressed: ${event.key}`;
// });
  

//Q.3.

let btn =document.createElement("button");
btn.innerText = "click me";
document.querySelector('body').append(btn);
btn.addEventListener("click", function(){
  btn.style.backgroundColor = "red";
});

//Q.4.
const nameInput = document.getElementById("nameInput");
const nameDisplay = document.getElementById("nameDisplay");

nameInput.addEventListener("input", () => {
    // Get the value from the input
    let input = nameInput.value;

    // Remove any character that is not a letter or space
    let filteredInput = input.replace(/[^a-zA-Z\s]/g, '');

    // Update the input field and the H2 heading
    nameInput.value = filteredInput;
    nameDisplay.textContent = filteredInput || "Your name will appear here...";
});