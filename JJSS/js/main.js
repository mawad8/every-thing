// FUNCTIONS

// var greeting = "hello";

// greet();

// here we change the var  but we didnt cancel the first one
// if you wanna run ur function u have to 
// write it by it selfe 

// greeting = "hola";
// greet();



// and here we but what we want for the function
// alert or ......
// function greet() {
// 	alert(greeting);
// }

// function sum(x,y) {
// 	console.log(x+y);
// }
// sum(4,7);
// sum(10,15);

var firstname = prompt("what your first name?");
var lastname = prompt("what your last name?");

// here to difinion our var to our function
greet(firstname,lastname);


function greet(x,y) {
	alert("hi there" + " " + x + " " + y + "!");
}