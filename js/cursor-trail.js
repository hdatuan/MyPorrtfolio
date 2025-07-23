const trail = document.querySelector(".cursor-trail");

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

// Lắng nghe vị trí chuột thực
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Hàm animation mượt
function animate() {
  // Tăng giá trị currentX/Y tiến dần tới mouseX/Y
  currentX += (mouseX - currentX) * 0.1; // 0.1 là tốc độ đuổi theo
  currentY += (mouseY - currentY) * 0.1;

  trail.style.left = currentX + "px";
  trail.style.top = currentY + "px";

  requestAnimationFrame(animate);
}

animate(); // Bắt đầu animation
