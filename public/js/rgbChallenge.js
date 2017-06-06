var numCircle;
var color=[];
var pickedColor;
var score;
var isWinning;
var circles=document.querySelectorAll(".circle");
var colorDisplay=document.querySelector("#colorDisplay");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetBtn=document.querySelector("#resetButton");
var modeBtn = document.querySelectorAll(".mode");
var body=document.querySelector("body");
var correctDisplay=document.querySelector("#correct");
var wrongDisplay=document.querySelector("#wrong");

init();

function init(){
	isWinning=false;
	score=0;
	numCircle=6;
	setUpModeBtn();
	setUpCircle();
	setUpResetBtn();
	reset();
}

function setUpModeBtn(){
	for(var i=0; i<modeBtn.length; i++){
		modeBtn[i].addEventListener("click",function(){
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			modeBtn[2].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent==="Easy"){
				numCircle=3;
			}else if(this.textContent==="Hard"){
				numCircle=6;
			}else{
				numCircle=9;
			}
			reset();
		});
	}
}

function setUpCircle(){
	for(var i=0; i<circles.length; i++){
		circles[i].addEventListener("click",function(){
			var clickedColor=this.style.background;
			if(clickedColor===pickedColor){
				score++;
				isWinning=true;
				message.textContent="Score: "+score;
				resetBtn.textContent="Next";
				correctDisplay.style.display="block";
				changeColor(clickedColor);
			}else{
				isWinning=false;
				message.textContent="Score: "+score;
				resetBtn.textContent="Play Again?";
				wrongDisplay.style.display="block";
				showColor();
			}
		});
	}
}

function setUpResetBtn(){
	resetBtn.addEventListener("click",function(){
		reset();
	});
}

function reset(){
	if(!isWinning){
		score=0;
	}
	correctDisplay.style.display="none";
	wrongDisplay.style.display="none";
	resetBtn.textContent="New Colors";
	h1.style.background="steelblue";
	body.style.background="#232323";
	message.textContent="Score: "+score;
	color=colors(numCircle);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0; i<color.length; i++){
		circles[i].style.display="block";
		circles[i].style.background=color[i];
	}
	if(circles.length>color.length){
		for(var j=color.length; j<circles.length; j++){
			circles[j].style.display="none";
		}
	}
}

function changeColor(color){
	h1.style.background=color;
	body.style.background=color;
	for(var i=0; i<circles.length; i++){
		circles[i].style.display="none";
	}
}

function showColor(){
	h1.style.background=pickedColor;
	body.style.background=pickedColor;
	for(var i=0; i<circles.length; i++){
		circles[i].style.display="none";
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*color.length);
	return color[random];
}

function colors(num){
	var arr=[];
	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}