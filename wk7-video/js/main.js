//                           // lesson 1
// // arrays and object

// // array

// var myarrays = [408, "moe awad", false]
// var combinedarrays = [[1,2,3], ["a,c,d"], [true,false,true]];
// console.log(combinedarrays.length);
// console.log(combinedarrays[0]);
// console.log(combinedarrays[1]);
// console.log(combinedarrays[2]);
// // we want the first index from all the arrays expet the big one
// console.log(combinedarrays[0][0]);
// console.log(combinedarrays[1][0]);
// console.log(combinedarrays[2][0]);

// // object
// // var object {
// 	// proparty
// // }

// // var moe = {
// 	// name: "mohammad"
// 	// age: 27
// 	// like: soccor
// // }

// // all the variable type we dilling with
// // string
// // booleans
// // numbers
// // arrays
// // object

// // -------------------------------------------------
//                               // lesson 2
// // 2looping through arrays
//   var students = ["mo", "so", "bo", "cia", "bialo", "ksjxn", ",msnx"];
//   // if i wanna log every one of this name to the console
//   // without for loop
//   // console.log(students[0]);
//   // console.log(students[1]);
//   // console.log(students[2]);
//   // console.log(students[3]);
//   // console.log(students[4]);
//   // but that not pro way to do that

//   // lets do it with for
//   for ( i = 0; i < students.length; i++){
//   	console.log(students[i]);
//   }
//   // if i wanna print all the arrays name on the html
//   // page what can i do
//   for ( i = 0; i < students.length; i++){
//   	document.write(students[i] +" " + "its a student at codify <br>");
//   }

//   var numarray = [2,4,6,8];
//   for ( i = 0; i < numarray.length; i++){
//   	document.write(numarray[i] * numarray[i] + " " + " multible the orginal number <br>")
//   }

//   var team = ["mohammad", "sofan", "hamzah","rosi","hadi","laith","frank"]
//   var username = prompt("input ur username");
//   // break thats meen if you foun the match stop dont keep searching
//   // if i wanna let it contiue delete break line

//   for ( i = 0; i < team.length; i++){
//   	if(username == team[i]){
//   		console.log(team[i] + "its match")
//   		document.write(team[i] + "its from our team");
//   		break;
//   	} else{
//   		console.log(team[i] + "not match");
//   	}
//   }

//   // ------------------------------------------
//                         // lesson 3
//   // for loop for arrays with object

// //   var team = [
// //    {
// //    	name: "bayren",
// //    	score: 1,
// //    	win: true
// //    },
// //     {
// //    	name: "barcelona",
// //    	score: 2,
// //    	win: false
// //    },
// //     {
// //    	name: "real",
// //    	score: 0,
// //    	win: false
// //    }
// //    ]
// // for ( i = 0; i < team.length; i++){
// // 	// console.log(team[i].name + " " +team[i].score + " " +team[i].win );
// //     console.log("team name" + " " + team[i].name)
// //     console.log("team score" + " " + team[i].score)
// //     if ( team[i].win == true ) {
// //     	console.log("they are winer")
// //     }else{
// //     	console.log("they never win")
// //     }
// // }

// // --------------------------------------------
//                              // lesson 4
// // document.getElementById("id name");
// document.getElementById("hhh");
//   // if i wanna change it from the console 
//   // just write document.getElementById("hhh").textContent/or/innerText = "what i wanna chang"


//   // if we wanna make our life easy

//   // we gonna store the wholl thing in var and if i wanna use it in the console its gonna be easy

//   var myh1 = document.getElementById("hhh");
//   // i can cheng the color through the console
//   // myh1.style.color = "the color" and we can put any css proporty after style 

// var team = [
//    {
//    	name: "bayren",
//    	score: 1,
//    	win: true
//    },
//     {
//    	name: "barcelona",
//    	score: 2,
//    	win: false
//    },
//     {
//    	name: "real",
//    	score: 0,
//    	win: false
//    }
//    ]

//    var myh1 = document.getElementById("hhh")
//     var myh2 = document.getElementById("hh")
//      var myh3 = document.getElementById("h")

// for ( i = 0; i < team.length; i++){

// myh1.innerText = myh1.innerText + " " + team[i].name
// myh2.innerText = myh2.innerText + " " + team[i].score
// myh3.innerText = myh3.innerText + " " + team[i].win

// }
// -------------------------------------
                     // lessson 5
// on click & .value


// make the array with object

var team = [
    {
    	name: "bay",
    	score: 1,
    	win: true
    },
    {
   	name: "barc",
    	score: 2,
    	win: false
    },
     {
    	name: "real",
    	score: 0,
    	win: false
    }
    ]


// we connect the js with the html we bring the IDs 
var input = document.getElementById("team");
var myh1 = document.getElementById("name");
var myh2 = document.getElementById("score");
var myh3 = document.getElementById("win");


// we setup func to save the info
function getInfo() {


             // we setup for loop to go through the arrays
      for (var i = 0; i < team.length; i++){

      	// we use the if statment to compare between what we right and what we have in the arrays
      	// .value:- to pull the text the user typed in the input filed and acces it on js
           if (input.value == team[i].name) {
            // the inner text let us type in the h1 becuse its empty in the html
            myh1.innerText = team[i].name;
            myh2.innerText = team[i].score;
            myh3.innerText = team[i].win;
            // the return to brake let the function stop if we find the match
            // if we didnt let it finshe and go to the alert

            return;

           }



      };

alert("team not found")

}














