status1="";
video="";
input="";

function setup(){
    canvas = createCanvas(350, 300);
    canvas.center();

    video = createCapture();
    video.hide();
    video.size(350, 300);
}

function start(){
    object = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input = document.getElementById("object_name_input").value;
}

function modelLoaded(){
    console.log("Model Loaded!");
    status1 = true;
}

function draw(){
    image(video, 0, 0, 350, 300)
}