var numberOfSquares = 6 ;
//var colors = generateRandomColors(numberOfSquares);
var colors = [];
//assign space between number and comma so that comparison can be done
var squares = document.querySelectorAll(".square");
//var pickedColor = pickColor();
var pickedColor ;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//modeButtons event listeners
	setUpModeButtons();
	setUpSquares(); 

	reset();
}

function setUpModeButtons(){
	for(var i = 0 ; i <modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");

			this.classList.add("selected");
			if(this.textContent ==="Easy"){
				numberOfSquares = 3;
			}else{
				numberOfSquares = 6;
			}
			reset();
			//figure how many squares to show
			//pick new colors
			//pick a new picked color
	});
}
}
function setUpSquares(){
	for(var i =0; i < squares.length;i++){
		//add initial colors
		squares[i].style.background = colors[i];
		//add click listeners
		squares[i].addEventListener("click",function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare
			if(clickedColor === pickedColor){
				//alert("Correct");
				messageDisplay.textContent = "Correct!";
				h1.style.background = clickedColor; 
				resetButton.textContent = "Play Again ?";
				changeColors(clickedColor);
			}else{
				//alert("Incorrect");	
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again !";
			}
			//console.log(clickedColor,pickedColor);
		});
	}
}

function reset(){
		colors = generateRandomColors(numberOfSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor; 
	resetButton.textContent = "New Colors";
	//change colors of square
	messageDisplay.textContent ="";
	for(var i = 0 ;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
		
	}
	h1.style.background = "steelblue";
}
// easyBtn.addEventListener("click",function(){
// 	hardBtn.classList.remove("selected");	
// 	easyBtn.classList.add("selected");	
// 	numberOfSquares =3;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0;i<squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		}else{
// 			squares[i].style.display = "none";
// 		}

// 	}
// });
// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");	
// 	easyBtn.classList.remove("selected");
// 	numberOfSquares =6;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0;i<squares.length;i++){
// 			squares[i].style.background = colors[i];
// 			//removing the none display
// 			squares[i].style.display = "block";
		

// 	}	
// });

resetButton.addEventListener("click",function(){
	// //generate all new colors
	// colors = generateRandomColors(numberOfSquares);
	// //pick a new random color
	// pickedColor = pickColor();
	// //change color display to match picked color
	// colorDisplay.textContent = pickedColor; 
	// this.textContent = "New Colors";
	// //change colors of square
	// messageDisplay.textContent ="";
	// for(var i = 0 ;i<squares.length;i++){
	// 	squares[i].style.background = colors[i];
	// }
	// h1.style.background = "steelblue";
	reset();
}); 
//colorDisplay.textContent = pickedColor;




function changeColors(color){
	//loop through all squares
	for(var i = 0 ; i <squares.length;i++){
		squares[i].style.background = color;
	}
	//change each color to match given color
}

function pickColor(){
	//random number doesnt inlcude 1.So length should be used
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0 ; i < num;i++){
		arr.push(randomColor());
		//get random color and push into array
	}
	return arr;
}

function randomColor(){
	//pick a red 0-255
	var r  = Math.floor(Math.random() * 256 );
	//pick a green 0-255
	var g  = Math.floor(Math.random() * 256 );
	//pick a blue 0-255
	var b  = Math.floor(Math.random() * 256 );
	return "rgb(" + r + ", " + g + ", " + b + ")";
}