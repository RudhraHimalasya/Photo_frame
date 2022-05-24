function preload(){
}

function setup(){
    canvas=createCanvas(600, 600);

    canvas.position(570,150);
    video=createCapture(VIDEO);
video.hide();




}
function draw(){
    image(video,50,50,500,500)


fill("pink");
stroke(127, 63, 120);
    translate(30, 5);
    noStroke();
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 40, 40, 90);
      rotate(PI/5);}

      
      fill(255,255,0);
      stroke(127, 63, 120);
      circle(10,20, 30);
      
      fill(204, 101, 192, 127);
      stroke(127, 63, 120);
      square(100,5, 30);

      fill(8,213,200);
      stroke(127, 63, 120);
      circle(180,20, 30);


      fill(204, 101, 192, 127);
      stroke(127, 63, 120);
      square(230,5, 30);

      fill(8,213,200);
      stroke(127, 63, 120);
      circle(320,20, 30);

      fill(204, 101, 192, 127);
      stroke(127, 63, 120);
      square(375,5, 30);

      fill(8,213,200);
      stroke(127, 63, 120);
      circle(470,20, 30);

      fill(204, 101, 192, 127);
      stroke(127, 63, 120);
      square(530,5, 30);      

      fill(8,213,200);
      stroke(127, 63, 120);
      circle(545,80, 30);

      
      fill(204, 101, 192, 127);
      stroke(127, 63, 120);
      square(530,130, 30);      

      fill(8,213,200);
      stroke(127, 63, 120);
      circle(545,200, 30);

      fill(204, 101, 192, 127);
      stroke(127, 63, 120);
      square(530,250, 30);    

      fill(8,213,200);
      stroke(127, 63, 120);
      circle(545,320, 30);

      fill(204, 101, 192, 127);
      stroke(127, 63, 120);
      square(530,360, 30);  

      fill(8,213,200);
      stroke(127, 63, 120);
      circle(390,570, 30);

      fill(204, 101, 192, 127);
      stroke(127, 63, 120);
      square(300,555, 30);  

      
      fill(8,213,200);
      stroke(127, 63, 120);
      circle(240,570, 30);

      fill(204, 101, 192, 127);
      stroke(127, 63, 120);
      square(150,555, 30); 

      fill(8,213,200);
      stroke(127, 63, 120);
      circle(100,570, 30);

      fill(204, 101, 192, 127);
      stroke(127, 63, 120);
      square(15,555, 30); 

      fill(8,213,200);
      stroke(127, 63, 120);
      circle(-5,500, 30);

      fill(204, 101, 192, 127);
      stroke(127, 63, 120);
      square(-20,420, 30); 

      fill(8,213,200);
      stroke(127, 63, 120);
      circle(-5,370, 30);

      fill(204, 101, 192, 127);
      stroke(127, 63, 120);
      square(-20,290, 30); 

      fill(8,213,200);
      stroke(127, 63, 120);
      circle(-5,230, 30);

      fill(204, 101, 192, 127);
      stroke(127, 63, 120);
      square(-20,150, 30); 

      fill(8,213,200);
      stroke(127, 63, 120);
      circle(-5,110, 30);

fill("pink");
stroke(127, 63, 120);
    translate(500, 500);
    noStroke();
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 40, 40, 90);
      rotate(PI/5);}

      
      fill(255,255,0);
      stroke(127, 63, 120);
      circle(5,3, 40);



    }

function take_snapshot(){
save("pic.png");
}
