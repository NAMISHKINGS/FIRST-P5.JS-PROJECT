function preload(){

}

function setup(){
    var canvas = createCanvas(500, 300);
    canvas.position(350, 10);
    video = createCapture(VIDEO);
    video.hide();
    color_name = "";
}

function draw(){
  image(video, 80, 50, 340, 180);
    fill(90, 90, 90);
    stroke(90, 90, 90);
    rect(33, 20, 20, 250)
  
    fill(90,90,90);
    stroke(	90,90,90);
    circle(45, 30, 50, 50)
  
   fill(90, 90, 90);
    stroke(90, 90, 90);
    rect(450, 20, 20, 250)
  
  fill(90,90,90);
    stroke(	90,90,90);
    circle(460, 30, 50, 50)
  
   fill(90, 90, 90);
    stroke(90, 90, 90);
    rect(53, 20,400, 20)
  
  fill(90,90,90);
    stroke(	90,90,90);
    circle(45, 250, 50, 50)
  
   fill(90, 90, 90);
    stroke(90, 90, 90);
    rect(53, 245,400, 20)
  
  fill(90,90,90);
    stroke(	90,90,90);
    circle(460, 260, 50, 50)
}


function take_snapshot(){
    save("image.png");
}