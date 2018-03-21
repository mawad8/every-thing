var userage = prompt("how old are you?");
if (userage > 21) {
	console.log("welcome");
}
else if (userage == 21) {
	console.log("congratulaion on turn 21! you may enter");

}

else if (userage > 18 ) {
	console.log("welcome but no drink");
}
else if (userage == 18) {
	console.log("congratulaion on turn 18! you may enter but you cant drink");

}
else{
	console.log("you shall not pass!");
}