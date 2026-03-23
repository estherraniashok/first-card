const canvas = document.getElementById("scratchCanvas");
const ctx = canvas.getContext("2d");
const img = document.getElementById("invite");

let isDrawing = false;

// Wait for everything to load
window.addEventListener("load", () => {

  // Set canvas size equal to image
  canvas.width = img.clientWidth;
  canvas.height = img.clientHeight;

  // 🎨 GOLD LAYER
  ctx.fillStyle = "#D4AF37";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // ❤️ HEART SHAPE (WIDER)
  ctx.globalCompositeOperation = "destination-in";

  let x = canvas.width / 2;
  let y = canvas.height / 2 -3;

  let width = 120;   // 🔥 increase for more width ↔️
  let height = 80;  // 🔥 increase for more height ↕️

  ctx.beginPath();
  ctx.moveTo(x, y);

  ctx.bezierCurveTo(x, y - height, x - width, y - height, x - width, y);
  ctx.bezierCurveTo(x - width, y + height, x, y + height * 1.5, x, y + height * 2);

  ctx.bezierCurveTo(x, y + height * 1.5, x + width, y + height, x + width, y);
  ctx.bezierCurveTo(x + width, y - height, x, y - height, x, y);

  ctx.closePath();
  ctx.fill();

  // ✨ TEXT
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "white";
  ctx.font = "bold 20px Arial";
  ctx.textAlign = "center";
  ctx.fillText("Scratch ❤️", canvas.width / 2, canvas.height / 2 + 60);

  // Enable scratch
  ctx.globalCompositeOperation = "destination-out";
});

// ✨ SCRATCH FUNCTION
function scratch(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 25, 0, Math.PI * 2);
  ctx.fill();
}

// 📱 TOUCH EVENTS
canvas.addEventListener("touchstart", () => isDrawing = true);

canvas.addEventListener("touchend", () => isDrawing = false);

canvas.addEventListener("touchmove", (e) => {
  if (!isDrawing) return;

  let rect = canvas.getBoundingClientRect();
  let x = e.touches[0].clientX - rect.left;
  let y = e.touches[0].clientY - rect.top;

  scratch(x, y);
});

// 🖱️ MOUSE EVENTS
canvas.addEventListener("mousedown", () => isDrawing = true);

canvas.addEventListener("mouseup", () => isDrawing = false);

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;

  let rect = canvas.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  scratch(x, y);
});