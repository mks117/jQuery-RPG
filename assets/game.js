

$(document).ready(function () {
	
	$( "#character" ).draggable({ grid: [100, 100], containment: "#game-board" });


	$( "#character").keyup(function() {
		console.log("keyup")
	})



} );

function myFunction(event) {
	var key = event.keyCode;
	console.log(key)

	var y = $("#character").css("top")
	var x = $("#character").css("left")
	console.log(y + ", " + x)

	if(key === 38) {
		console.log("up")
		top -= 100;
	}
	else if(key === 39) {
		console.log("right")
	}
	else if(key === 40) {
		console.log("down")
	}
	else if(key === 37) {
		console.log("left")
	}

	$("#character").css({top: y});
}