var world_start;
var canvas;
var video;
var poseNet;
var narizX;
var narizY;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800, 400);
	video.parent("game_console");
	poseNet=ml5.poseNet(video, modelLoaded);
	poseNet.on("pose", gotPoses);
}

function draw() {
	game();
}

function modelLoaded(){
	console.log("modelo carregado");
}

function gotPoses(results){
	if(results.length>0){
		console.log(results);
		narizX=results[0].pose.nose.x;
		narizY=results[0].pose.nose.y;
	}
}