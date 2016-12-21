
var players = [];
var tbLocation = 70;

function setup() {
	createCanvas(800, 500);
}

function draw() {
	background(165);

	// var tbox = font.textBounds(textString, 10, 30, 12);
	textSize(32);
	text("Phase10 Game Calculator",200, 40);
	



	rect(10, tbLocation, 	 400, 45);
	rect(10, tbLocation * 2, 400, 45);
	rect(10, tbLocation * 3, 400, 45);
	rect(10, tbLocation * 4, 400, 45);
	rect(10, tbLocation * 5, 400, 45);
	rect(10, tbLocation * 6, 400, 45);
}
