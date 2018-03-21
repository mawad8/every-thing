// LOOP - FOR LOOP
// i=index



// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// this gonna print my name 11 time from 0 to 10
var mystring = "mohammad awad";

for( var i=0; i<= 10; i = i+1){
	console.log(mystring);
}

// this its gonna print each index letter by letter
// but its will not print the last tow letter
// becuse the index stop in number 10 thats from the condions

var mystring = "mohammad awad";

for( var i=0; i<= 10; i = i+1){
	console.log(mystring[i]);
}
// so here we be littil bit smarter
// we but if the index less than the string stop print
// 
var mystring = "mohammad awad";

for( var i=0; i< mystring.length; i = i+1){
	console.log(mystring[i]);
}

var mystring = prompt("what yous full name?");

for( var i=0; i<= mystring.length; i = i+1){
	console.log(mystring[i]);
}
// mod statment for the even number
for( var i=0; i<= 100; i = i+1){
	if (i % 2 ==0) {
	console.log(i);
}
}
