$(document).ready(function(){
	//this is the setup for jquery

	$("#testAPI").on("click", function(){
		console.log("it's working");
	//this is how we know the api is functioning
	});

	var test = $.ajax({
		type: "GET",
		url: "http://localhost:3000/api/test"
	});
	test.done(function(data){
		console.log(data);
	//this is what prints if the test succeeds
	});
	test.fail(function(){
		console.log("Oh no!");
	//this is what prints if the test fails
	});
});