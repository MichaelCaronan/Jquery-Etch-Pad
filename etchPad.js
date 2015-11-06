$(document).ready(function() {
	replicateDiv(inputNum);
	$(".square").hover(function() {
		$(this).fadeTo("slow", 0.25);
	});
});
var inputNum = 256;
function replicateDiv (inputNum) {
	for (i = inputNum; i > 0; i--) {
		$("#container").append('<div class = "square"></div>')
	};		
};

function reset() {
	$("div").fadeTo("fast", 1);
	var gridSize = prompt("Grid Size?");
	$(".square").css("height", 800/gridSize); 
	$(".square").css("width", 800/gridSize);
	replicateDiv(gridSize * gridSize);
	$(".square").hover(function() {
		$(this).fadeTo("slow", 0.25);
	});
};

