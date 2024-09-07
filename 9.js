let smallImages = document.getElementsByClassName("oldImg");
for(let i=0; i< smallImages.length; i++){
    smallImages[i].src="assets/spiderman_img.png";
    console.log(`value of image no. ${i} is changed.`);
    //console.dir(smallImages[i].src);
}

//QUERY SELECTOR
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelectorAll("p"));

console.dir(document.querySelector("div a"));

console.dir(document.querySelectorAll("div a"));

//let para = document.querySelector('p');
//para.innerText; Shows the visible text contained in a node
//para.innerHTML; Shows all the full text
//para.textContent; Shows the full markup

//MANIPULATION
//para.innerText = "abc";
//para.innerText = "Hi, I am Peter Parker";
//para.innerText = "Hi, I am <b>Peter Parker</b>";
//para.innerHTML = "Hi, I am <b>Peter Parker</b>";

//let heading = document.querySelector('h1');
// heading.innerText;
// heading.innerHTML = "<u>Spider Man</u>";
//heading.innerHTML = `<u>${heading.innerText}</u>`;

// MANIPULATING ATTRIBUTES(getAttribute, setAttribute)

// let img = document.querySelector('img');
// img
// img.getAttribute('id');
// img.setAttribute('id','spidermanImg');

// img.setAttribute('src', "assets/creation_3.jpeg");

// img.getAttribute('class');
// img.setAttribute('class', 'images');
// img.getAttribute('class');

// MANIPULATING STYLE (with style attribute)

// let img = document.querySelector('img');
// console.dir(img);
// img.style;
// let heading = document.querySelector('h1');
// heading.style;
// heading.style.color = 'purple';
// heading.style.color = 'green';
// heading.style.backgroundColor = 'yellow';

let links = document.querySelectorAll(".box a");

for (link of links) {
  link.style.color = "purple";
}

// for (let i = 0; i < links.length; i++) {
//     links[i].style.color = "green";
// }   let box =document.querySelector('.box')  , box.style;

//classList Property :-

// let img = document.querySelector('img');
// img.classList;

// let heading =document.querySelector('h1');
// heading.classList;
// heading.classList.add("abc"); ADD METHOD
// heading.classList;
//heading.classList.add("green");
//heading.classList.add('underline');
//heading.classList.remove('green');  REMOVE METHOD
//heading.setAttribute('class', 'green');
//heading.classList.contains("underline"); will return false  CONTAINS METHOD
//heading.classList.contain("green");  will return true
//heading.classList.toggle("green"); => false will remove green   TOGGLE METHOD
//heading.classList.toggle("underline"); => true will add underline
//heading.classList.toggle("green"); => true will add green

// let box =document.querySelector(".box");
// box.classList;
// box.classList.add("yellowBg");


//NAVIGATION ON PAGE [USING PARENT CHILD AND SIBLING] read everything all are important
// h4 = document.querySelector('h4');
// h4.parentElement;
// h4.children;
// let box = document.querySelector('.box');
// box.children;
// box.childElementCount;
// let ul = document.querySelector('ul');
// ul.parentElement;
// ul.childElementCount;
// ul.children;
//ul
//ul.children;
//ul.children[0].ul.children[1];
//ul.children[2].previousElementSibling;
//ul.children[1].previousElementSibling;
//ul.children[1].nextElementSibling;

// Changing color using navigation
//let img = document.querySelector('img');
//img.previousElementSibling;
//img.previousElementSibling.style;
//img.previousElementSibling.style.color = "green";

// ADDING ELEMENTS ON PAGE FROM JAVASCRIPT

// document.createElement('p'); //=> A paragraph is created
// let newP = document.createElement('p');
// console.dir(newP);
// newP.innerText = "Hi, I am a new p";
// console.dir(newP);

// let body = document.querySelector('body');
// body.appendChild(newP); //=> It is added in the body tag.

// let box = document.querySelector('.box');
// box.appendChild(newP);

// let btn  = document.createElement('button');
// console.dir(btn);
// btn.innerText = "click me";
// box.appendChild(btn);

//newP.append("this is new text"); only append is used here anything can be added here
//newP.append("btn");
//newP.append("do not click this button");
//box.prepend(newP); here newP is added before the box

// INSERT ADJACENT ELEMENT
//p.insertAdjacentElement('beforebegin', btn);
//p.insertAdjacentElement('afterbegin', btn);
//p.insertAdjacentElement('beforeend', btn);
//p.insertAdjacentElement('afterend', btn);

//REMOVING ELEMENTS
//body.removeChild(btn);
//btn.remove();
//p.remove();
//body.remove();




// let para = document.createElement('p');
// para.innerText = "Hey, I am red!";
// document.querySelector('body').prepend(para);
// para.classList.add('red');

// let head = document.createElement('h3');
// head.innerText = "I am blue h3!";
// document.querySelector('body').prepend(head);
// head.insertAdjacentElement('beforebegin', para);
// head.classList.add('blue');

// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let p = document.createElement('p');
// h1.innerText = "I'm in a div.";
// p.innerText = "ME TOO!";
// div.append(h1);
// div.append(p);
// div.classList.add('div');
// document.querySelector('body').prepend(div);

// ASSIGNMENT QUESTIONS

//Q.1.
let input = document.createElement('input');
let button = document.createElement('button');
button.innerText = "Click me";
document.querySelector('body').append(input);
document.querySelector('body').append(button);

//Q.2.
button.setAttribute('id', 'btn');
input.setAttribute('placeholder', 'username');

//Q.3.
let btn =document.querySelector("#btn");
btn.classList.add('btnstyle');

//Q.4.
let h1 =document.createElement("h1");
h1.innerText = "DOM Practice";
document.querySelector('body').insertAdjacentElement("beforebegin",h1);
h1.classList.add('h1');

//Q.5.
let p = document.createElement('p');
p.innerHTML = "Apna College <b>Delta</b> Practice.";
document.querySelector('body').append(p);

