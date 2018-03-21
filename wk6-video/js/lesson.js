// LESSON 1
// print "hello world" to the console
	// console.log("hello world")
	// print "hello world" to the web page
	// document.write("hello world")
	// print a message in a pop up box 
	// alert("hello world")

// LESSON 2
	// var name = prompt("whats your name?")
	// console.log(name)

	// LESSON 3
	// NUMBER
	var one = 12
	// BOOLEN
	var tow = true
	// STRING
	var three = "write any thing you want"
	// ARRAY
	// ARRAY can be number or boolen or string
	var four = [3, true, "string", 6]
// texting
var one1 = 12 + 33
console.log(one)
var tow2 = false
console.log(tow)
var three3 =  "mohammad" +" "+"awad"
console.log(three)

// LESSON 4 : CONCATENATION
// THATS MEEN ADD DEFFERINT VARIABLE TOGETHEER
var combinevariables = one1 + tow2 + three3 + four
console.log(combinevariables)
var onec = 12
var towice = 15
var combinevariables2 = onec + towice
console.log(combinevariables2)

// here if we rialise it dident add together it
// just put it next to each other why???
// becuse the prompt its give us just string value
// so we cant add number to string how we can fix this in the 
// second example
// var number = 12
// var number2 = prompt("add a number between 0 to 100")
 // var bb = number + number2
 // console.log(bb)
// how we can fix it
// so we have to change the string to number like the way we did in NUMBR2
// but make sure the n in number be capitol N
 var numbr = 12
 var numbr2 = Number(prompt("add number between 0 to 100"))
// var bbb = numbr + numbr2
// console.log(bbb)

// LESSON 5
// ELSE/IF STATMENT
// if (3 > 2 ) {
	// alert("is greter than 2")
// }

// if (numbr > 2) {
	// alert(numbr + "is greter than 2")
// }

if (numbr > numbr2) {
	alert(numbr + "greater than" + numbr2)

} else if (numbr < numbr2) {
	alert(numbr2 + "grater than" + numbr)
}
else{
	alert("you chose the same number as me!!")
}

var number = 77
var num = Number(prompt("write any number"))

if (number > num) {
	alert("perfict")
} else if (num > number) {
	alert("write deffirant number")
}
else if (number == num) {
	alert("you entered the same number as me")
}
else {
	alert("its not number")
}
// LESSON 6 : COMPARISON AND LOGICAL OPERATORS
var num5 = 6
var num6 = 6
if (num5 == num6) {
	console.log("they're equal")
} 

var num5 = 6
var num6 = "6"
if (num5 == num6) {
	console.log("they're equal")
} 

var num5 = 6
var num6 = "6"
if (num5 === num6) {
	console.log("they're equal")
}
else{
	console.log("not equal")
} 

var num7 = 6
var num8 = 6
var num9 = 8
var num10 = 16
// && T AND T = T
// ETHIR THAN THAT FALSE
if (num7 == num8 && num9 < num10) {
	console.log("ture")
} else {
	console.log("false")
}

if (num7 == num8 && num9 > num10) {
	console.log("ture")
} else {
	console.log("false")
}
// || OR T AND T = T 
// T AND F = T
// F AND F = F

if (num7 == num8 || num9 == num10) {
	console.log("ture")
} else {
	console.log("false")
}
if (num7 < num8 || num9 == num10) {
	console.log("ture")
} else {
	console.log("false")
}
// LESSON 8
// LOOPING 
// 1- WHILE LOOP
// it has just one value 
var username = prompt("enter your name")
while (username != "mohammad"){
username = prompt("whats your name")
}
// 2- FOR LOOP
// for(var i = 0; i < 20; i = i + 1 ){
	// do this thing
// }
for(var i = 0; i < 20; i = i + 1 ){
	document.write(i)
}
// LESSON 9 
// FUNCTIONS
var bb = 10
var bbb = 15
function add(){
	document.write(bb + bbb)
}
// we have to wtite the function under so it can run
// ether than that nothing gonna happend
 add()
 // if i dont wanna use var just put the 
 // number inside the functions or string....

function add(a, b){
	document.write(a + b)
}

add(5, 5)
// the value comes from the initional call from the func


function add(a, b){
	document.write(a + b)
}
// this is the initioal call 
add(bb, bbb)

function add(a){
	document.write(a * a)
}

add(bbb)