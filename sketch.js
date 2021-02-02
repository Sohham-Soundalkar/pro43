var hr, mn, sc, scAngle; 

function setup() {
  createCanvas(1600,800);
  
  hr = hour();
  mn = minute();
  sc = second();
}

function draw() {
  background("black");
  
  scAngle = map(sc, 0, 60, 0, 360);
  scAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(hr, 0, 60, 0, 360);

  // seconds hand
  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  // minute hand
  push();
  rotate(scAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  // hour hand
  push();
  rotate(scAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  
  drawSprites();
}