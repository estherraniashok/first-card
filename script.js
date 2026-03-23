const canvas = document.getElementById("scratchCanvas");
const ctx = canvas.getContext("2d");
const img = document.getElementById("invite");

let isDrawing = false;

window.addEventListener("load", () => {

  canvas.width = img.clientWidth;
  canvas.height = img.clientHeight;

  // GOLD LAYER
  ctx.fillStyle = "#D4AF37";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // ❤️ WIDE HEART
  ctx.globalCompositeOperation = "destination-in";

  let x = canvas.width / 2;
  let y = canvas.height / 2;

  let width = canvas.width / 3;   // responsive width ❤️↔️
  let height = canvas.height / 4; // responsive height ❤️↕️

  ctx.beginPath();
  ctx.moveTo(x, y);

  ctx.bezierCurveTo(x, y - height, x - width, y - height, x - width, y);
  ctx.bezierCurveTo(x - width, y + height, x, y + height * 1.5, x, y + height * 2);

  ctx.bezierCurveTo(x, y + height * 1.5, x + width, y + height, x + width, y);
  ctx.bezierCurveTo(x + width, y - height, x, y - height, x, y);

  ctx.closePath();
  ctx.fill();

  // TEXT
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "white";
  ctx.font = "bold 22px Arial";
  ctx.textAlign = "center";
  ctx.fillText("Scratch ❤️", canvas.width / 2, canvas.height / 2 + 60);

  // Enable scratch
  ctx.globalCompositeOperation = "destination-out";
});

// SCRATCH
function scratch(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, Math.PI * 2);
  ctx.fill();
}

// TOUCH (mobile)
canvas.addEventListener("touchstart", () => isDrawing = true);

canvas.addEventListener("touchend", () => isDrawing = false);

canvas.addEventListener("touchmove", (e) => {
  if (!isDrawing) return;

  let rect = canvas.getBoundingClientRect();
  let x = e.touches[0].clientX - rect.left;
  let y = e.touches[0].clientY - rect.top;

  scratch(x, y);
});

// MOUSE (PC)
canvas.addEventListener("mousedown", () => isDrawing = true);

canvas.addEventListener("mouseup", () => isDrawing = false);

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;

  let rect = canvas.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  scratch(x, y);
});