
let keyPressedText = "";
let circleX = 0;
let circleY = 0;

function moveCircle() {
  if (keyIsDown(LEFT_ARROW) === true) {
    circleX -= 5;
  }
  if (keyIsDown(RIGHT_ARROW) === true) {
    circleX += 5;
  }
  if (keyIsDown(UP_ARROW) === true) {
    circleY -= 5;
  }
  if (keyIsDown(DOWN_ARROW) === true) {
    circleY += 5;
  }
}

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  moveCircle()
  background(0, 47, 167);

  if (mouseIsPressed === true) {
    fill(0, 47, 167);
  } else {
    fill(255);
  }
  
  strokeWeight(5);
  circle(circleX, circleY, 100);

  
  text(`circlePos: ${circleX}, ${circleY}. keyPressed: ${keyPressedText}`, 0, 0, 5000, 20);
}

function keyPressed() {
  keyPressedText = key;
}

