img="";
status="";
function preload(){
    img=loadImage('table.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:detecting objects";
}
function draw(){
    image(img,0,0,640,420);
    fill("#0000FF");
    text("Table",100,75);
    noFill();
    stroke("#0000FF");
    rect(90,40,500,350);
}
function modelLoaded(){
    console.log("model loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(results,error){
    if(error){
        console.log(error);
    }
    console.log(results);
}