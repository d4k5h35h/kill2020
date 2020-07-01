function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(25);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  let hr = hour();
  let mn = minute();
  let sc = second();
  let mo = month();
  let mi = millis();
  let dy = day();

  noFill();
  strokeWeight(10);
  stroke(255, 0, 0);
  let end1 = map(sc, 0, 60, 0, 360);
  arc( windowWidth/2, windowHeight/2, 250, 250, 0, end1);
  stroke(0, 0, 255);
  let end2 = map(mn, 0, 60, 0, 360);
  arc( windowWidth/2, windowHeight/2, 275, 275, 0, end2);
  stroke(255, 255, 0);
  let end3 = map(hr % 12, 0, 12, 0, 360);
  arc( windowWidth/2, windowHeight/2, 300, 300, 0, end3);
  translate(width / 2, height / 2);
  push();
  stroke(255, 0, 0);
  strokeWeight(4);
  rotate(end1);
  line(0,0,115,0);
  pop();
  push();
  stroke(0, 0, 255);
  strokeWeight(4);
  rotate(end2);
  line(0,0,100,0);
  pop();
  push();
  stroke(255, 255, 0);
  strokeWeight(4);
  rotate(end3);
  line(0,0,50,0);
  pop()
}
