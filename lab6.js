function setup() {
  spriteY = 0;
  spriteX = 0;
  notEaten = true;
  foodX = random(400);
  foodY = random(400);
  foodIsEaten = false;
  createCanvas(400, 400);
}

function draw() {
  background(220);
  addSprite(spriteX, spriteY, 1);
  drawFood(foodX, foodY, "red");
  let spriteEatsFood = dist(spriteX, spriteY, foodX, foodY);
  if (spriteEatsFood < 40) {
    foodIsEaten = true;
  }
  //console.log("Distance is " + spriteEatsFood);
  //console.log("SpriteX: " + spriteX + ", SpriteY: " + spriteY);
}

function drawFood(x, y, color) {
  if (notEaten) {
    push();
    // translate(x, y);
    fill(color);
    if (foodIsEaten) {
    
  } else{
    ellipse(x,y,30);
  }
  }
    pop();
}
function keyPressed() {
  if (keyCode == UP_ARROW) {
    spriteY -= 5;
  }
  if (keyCode == DOWN_ARROW) {
    spriteY += 5;
  }
  if (keyCode == RIGHT_ARROW) {
    spriteX += 5;
  }
  if (keyCode == LEFT_ARROW) {
    spriteX -= 5;
  }
}
// Create a function,draw my sprite.
function addSprite(x, y, size) {
  push();
  fill("orange");
  // translate(x, y);
  scale(size);
  if (foodIsEaten) {
    fill("red");
  }
  ellipse(x, y, 50);
  pop();
}
