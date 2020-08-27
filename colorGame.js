var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){	
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	//Looping through all the buttons
	for (var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			//figuring which button needs how many squares
			this.textContent === "Easy" ? numSquares=3 : numSquares=6;
			reset();
		});
	}
}

function setUpSquares(){
	for(var i=0; i<squares.length; i++){
		//add click Listeners to boxes
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent= "CORRECT";
				resetButton.textContent = "Play Again";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}


function reset(){
	colors = generateRandomColors(numSquares);
	//add new color to displayColor
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//pick a new random color from the array
	for(var i=0 ;i<squares.length; i++){
		if (colors[i]) {
			//to display all the 6 buttons
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
			squares[i].style.display = "none";
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];	
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	//rgb(r, g, b)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(num){
	var arr = []
	for (var i=0; i<num; i++)
		arr.push(randomColor());
	return arr;
}