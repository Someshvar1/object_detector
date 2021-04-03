img="";
function preload(){
    img=loadImage('table.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(img,0,0,640,420);
    fill("#0000FF");
    text("Table",100,75);
    noFill();
    stroke("#0000FF");
    rect(90,40,500,350);
}