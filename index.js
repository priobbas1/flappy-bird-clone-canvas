"use strict";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const canvasObstacles = document.getElementById("obstacles");
const ctxObstacles = canvasObstacles.getContext("2d");

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

let radius = 10;
let x = radius;
let y = radius;

function draw() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  ctxObstacles.canvas.width = window.innerWidth;
  ctxObstacles.canvas.height = window.innerHeight;
}
draw();

const update = (gravity, acceleration) => {
  if (x >= screenWidth + radius) {
    x = radius;
  }
  if (y > screenHeight + radius) {
    y = radius;
  }
  if (x <= -radius) {
    x = screenWidth - radius;
  }
  if (y < radius) {
    y = screenHeight - radius;
  }
  x += acceleration;
  y += gravity;
  ctx.fillStyle = "black";
  ctx.clearRect(0, 0, screenWidth, screenHeight);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
};
function start() {
  obstaculos();
  setInterval(() => {
    update(2, 0);
  }, 270);
}

document.addEventListener("keydown", function (event) {
  if (event.key == "ArrowLeft") {
    update(0, -2);
  } else if (event.key == "ArrowUp") {
    update(-5, 0);
  } else if (event.key == "ArrowRight") {
    update(0, +2);
  } else if (event.key == "ArrowDown") {
    update(5, 0);
  }
});

function obstaculos() {
  ctxObstacles.fillStyle = "green";
  const obstacle = {
    x: 100,
    y: 600,
    h: 300,
    w: 50,
  };

  const obstacle1 = ctxObstacles.fillRect(
    obstacle.x,
    obstacle.y,
    obstacle.h,
    obstacle.w
  );
  const obstacle2 = ctxObstacles.fillRect(1000, 100, 50, 500);
}

function loopObstacle() {
  for (let i = 0; i < 100; i++) {
    console.log("first");
  }
}

start();
