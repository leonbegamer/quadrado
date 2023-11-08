nozeX = 0;
nozeY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 700);
    video.position(800, 150);
    canvas = createCanvas(560, 560);
    canvas.position(100, 250);
    //proxima aula

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}   

function modelLoaded()
{
    console.log('PoseNet Is Intialized');
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
     console.log(results);
     nozeX = results[0].pose.nose.X;
     nozeY = results[0].pose.nose.Y;
     console.log('noseX =' + nozeX + 'nozeY =' + nozeY);

    leftWristX = results[0].pose.leftWristX;
    rightWristX = results[0].pose.rightWristX;

    difference = floor(leftWristX -rightWristX);

    console.log("leftWristX= "  + leftWristX + "rightWristX" + rightWristX + "difference =" + difference);
    }
}

function draw()
{
    background('red');
   
    document.getElementById("square_side").innerHTML = "largura e altura serão = " + difference +"px";
    fill('blue');
    stroke('black');
    square(noseX, noseY, difference);

}