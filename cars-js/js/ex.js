// // creat a for loop that prints in the console number between 0-100 in increments of 5

// for (var i = 0 ; i < 100; i += 5) {
// 	console.log(i)
// }

// // save a varaible value useing getElementById and .value

// let savel = "mohammad"

// var savevalue = document.getElementById("save");
// function getCo(){
// 	if (savevalue.value == savel) {
// 	console.log(savevalue.value)
// 	// body...
// }else {
// 	alert("nothing found")
// }
// }
// // create 3 car objict with 4 properties

// let bmw = {
// 	color: "red",
// 	model: "25",
// 	fast: true,
// 	year: "2015",
	
// }
// let VW = {
// 	color: "green",
// 	model: "bassat",
// 	fast: false,
// 	year: "2010"
// }
// let honda = {
// 	color: "white",
// 	model: "acura",
// 	fast: true,
// 	year: "2017"
// }
// --------------------
// create array of those 3 car objects
let carsarr = [
 {
 	name: "bmw",
	color: "red",
	model: "25",
	year: "2015",
	pic: "img/nn.jpg"
	
},

{
 	name: "vw",
	color: "green",
	model: "bassat",
	year: "2010",
	pic: "img/nnn.jpg"
},

 {
 	name: "honda",
	color: "white",
	model: "acura",
	year: "2017",
	pic: "img/nnnn.jpg"
}
]
function findCa(){

let myinpute = document.getElementById("name").value;
let myh1 = document.getElementById("color");
let myh2 = document.getElementById("model");
let myh3 = document.getElementById("year");
let mypic = document.getElementById("pic");

for (var i = 0; i < carsarr.length; i++){
	console.log(carsarr[i].name)

if (myinpute == carsarr[i].name){
	console.log("nice color" + " " + carsarr[i].color);
    console.log("the model" + " " +carsarr[i].model);
    console.log("the year" + " " +carsarr[i].year);
    console.log("this is the pic" + " " + carsarr[i].pic)

    pic.src = carsarr[i].pic;
    color.innerHTML = "this is the only color we have"  + " :-" +carsarr[i].color;
     model.innerHTML = "this is the best model" + " :-" +carsarr[i].model;
     year.innerHTML = "this the newest year" + " :-" + carsarr[i].year;
 }

}

}
// ---------------------------------


