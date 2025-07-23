document.querySelector(".user-info").addEventListener("click", function () {
  window.location.href = window.location.origin + window.location.pathname;
});





const trail = document.querySelector('.cursor-trail');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

// Lắng nghe vị trí chuột thực
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Hàm animation mượt
function animate() {
  // Tăng giá trị currentX/Y tiến dần tới mouseX/Y
  currentX += (mouseX - currentX) * 0.1;  // 0.1 là tốc độ đuổi theo
  currentY += (mouseY - currentY) * 0.1;

  trail.style.left = currentX + 'px';
  trail.style.top = currentY + 'px';

  requestAnimationFrame(animate);
}

animate(); // Bắt đầu animation










// JavaScript cho hiệu ứng đánh máy
class TypeWriter {
    constructor(element, texts, speed = 100, deleteSpeed = 50, pauseTime = 2000) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.deleteSpeed = deleteSpeed;
        this.pauseTime = pauseTime;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.originalText = this.element.textContent;
        
        this.type();
    }
    
    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            // Xóa ký tự
            this.element.textContent = currentText.substring(0, this.charIndex - 1) || "\u00A0";
            this.charIndex--;
        } else {
            // Thêm ký tự
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }
        
        let typeSpeed = this.isDeleting ? this.deleteSpeed : this.speed;
        
        if (!this.isDeleting && this.charIndex === currentText.length) {
            // Hoàn thành gõ, dừng lại rồi bắt đầu xóa
            typeSpeed = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            // Hoàn thành xóa, chuyển sang text tiếp theo
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
}

// Sử dụng hiệu ứng đánh máy
document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.text-animate h3');
    if (textElement) {
        const originalText = textElement.textContent;
        const texts = [
            originalText,
            'DevOps Engineer', 
            'Software Engineer'
        ]; // Bạn có thể thay đổi các text này
        
        new TypeWriter(textElement, texts, 150, 75, 2000);
    }
});