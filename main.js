song = "";
song2 = "";

function preload()
{
    song = loadSound("Saari Duniya Jalaa Denge - Animal 128 Kbps");
    song2 = loadSound("Jamal Jamaloo Animal(audiosong.in)");
}

function setup() 
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw()
{
    image(video,0,0,600,500);
}