//Create a reference for canvas 
c=document.getElementById("can");
d=c.getContext("2d");
//Give specific height and width to the car image
var green_width=100;
var green_height=150;
var green_x=5;
var green_y=225;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	background_imageTag= new Image;
	background_imageTag.onload=uploadBackground;
background_imageTag.src=background_image;

greencar_imageTag= new Image;
greencar_imageTag.onload=uploadgreencar;
greencar_imageTag.src=greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
d.drawImage(background_imageTag,0,0,c.width,c.height)
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	d.drawImage(greencar_imageTag,green_x,green_y,green_width,green_height)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
if(green_y>=100){
green_y=green_y-10;
uploadBackground();
uploadgreencar();
}
}

function down()
{
	if(green_y<=400){
		green_y=green_y+10;
		uploadBackground();
		uploadgreencar();
		}
}

function left()
{
	if(green_x>=100){
		green_x=green_x-10;
		uploadBackground()
		uploadgreencar()
		}
}

function right()
{
	if(green_x<=700){
		green_x=green_x+10;
		uploadBackground()
		uploadgreencar()
		}
}
