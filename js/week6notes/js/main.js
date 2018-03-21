// targets the console in the chrome dev tools, and logs a message
console.log("Werking");

// Standard jQuery Syntax
// $(SELECTOR).ACTION()
// function() { Code we want to execute goes in here }
// Target the Document/DOM and when it is ready(), run the function
$(document).ready(function(){
	//code that happens
})

// When the DOM is ready and Loaded, Run the func
$(document).ready(function(){
	// The stuff that happens when the DOM is ready

	// target anything with the ID of "header" and make it fade out
	$("#header").fadeOut();

	// Slide on Click Example
	// Target the ID of "slideBtn" and run the function when it is clicked
	$("#slideBtn").click(function(){
		//stuff that happens when #slideBtn is clicked
		$("#slideMe").slideToggle();
	});

	// jquery Animate() example
	// Target #animateBtn, when it is double clicked, run the function
	$("#animateBtn").dblclick(function(){
		console.log("dbl click working");
		//target the #animateMe div and animate it
		$("#animateMe").animate({
			letterSpacing:"+=5px",
			fontSize:"+=20px",
			marginLeft:"+=50px",
			height: "+=80px"
		});
	});

	// scrollTo.js plugin example
	//click on a button
	// run a function that scrolls to matching section

	$("#scrollOne").click(function(){
		$(window).scrollTo( $(".sec1"), 450 )
	})
	$("#scrollTwo").click(function(){
		$(window).scrollTo( $(".sec2"), 450 )
	})
	$("#scrollThree").click(function(){
		$(window).scrollTo( $(".sec3"), 450 )
	})


})