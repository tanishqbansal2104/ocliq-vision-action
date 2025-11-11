// === Fullscreen Glowing Grid + Moving Stars ===
const canvas = document.getElementById('gridCanvas');
const ctx = canvas.getContext('2d');
let width, height, t = 0;
let stars = [];

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;

  // create stars when size changes
  const starCount = Math.floor((width * height) / 20000);
  stars = Array.from({ length: starCount }, () => ({
    x: Math.random() * width - width / 2,
    y: Math.random() * height * -1,
    z: Math.random() * 600 + 200,
    speed: 0.5 + Math.random() * 1.5
  }));
}
window.addEventListener('resize', resize);
resize();

// main draw loop
function draw() {
  ctx.clearRect(0, 0, width, height);
  ctx.save();
  ctx.translate(width / 2, height / 1.2);
  ctx.scale(1, 0.8);

  // === base grid ===
  ctx.strokeStyle = 'rgba(124,92,255,0.25)';
  ctx.lineWidth = 1;
  const gridSize = 40;
  const waveAmp = 25;
  t += 0.015;

  for (let x = -width; x <= width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, -height * 1.5);
    ctx.stroke();
  }

  for (let y = 0; y < height * 1.5; y += gridSize) {
    ctx.beginPath();
    const offset = Math.sin(t + y / 50) * waveAmp;
    ctx.moveTo(-width, -y + offset);
    ctx.lineTo(width, -y + offset);
    ctx.stroke();
  }

  // === stars running across grid ===
  ctx.fillStyle = '#ffffff';
  stars.forEach(s => {
    s.z -= s.speed;               // move "toward" viewer
    if (s.z < 1) {
      s.x = Math.random() * width - width / 2;
      s.y = Math.random() * -height;
      s.z = 600;
      s.speed = 0.5 + Math.random() * 1.5;
    }

    const scale = 200 / s.z;
    const sx = s.x * scale;
    const sy = s.y * scale * 0.5; // compress vertically
    const size = Math.max(0.5, 3 - s.z / 200);

    ctx.beginPath();
    ctx.arc(sx, sy, size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${1 - s.z / 600})`;
    ctx.fill();
  });

  ctx.restore();

  // fade overlay
  const fade = ctx.createLinearGradient(0, 0, 0, height);
  fade.addColorStop(0, 'rgba(5,8,17,0)');
  fade.addColorStop(1, 'rgba(5,8,17,0.95)');
  ctx.fillStyle = fade;
  ctx.fillRect(0, 0, width, height);

  requestAnimationFrame(draw);
}
draw();

// parallax motion with mouse
// document.addEventListener('mousemove', e => {
//   const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
//   const moveY = (e.clientY / window.innerHeight - 0.5) * 20;
//   canvas.style.transform = `translate(${moveX}px, ${moveY}px)`;
// });

// simple contact form
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const thanks = document.getElementById('thanks');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    form.reset();
    thanks.textContent = `Thanks, ${email}! We'll notify you soon.`;
  });
});

// === Typewriter effect for second line ===
document.addEventListener("DOMContentLoaded", () => {
  const phrases = [
    "Understanding",
    "Thinking",
    "Observing Intelligently",
    "Recognizing Reality"
  ];

  const typedText = document.getElementById("typed-text");
  const typingSpeed = 100;     // ms per letter typed
  const erasingSpeed = 50;     // ms per letter erased
  const delayBetween = 1500;   // pause after a word completes
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const current = phrases[phraseIndex];
    if (!isDeleting && charIndex <= current.length) {
      typedText.textContent = current.substring(0, charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      typedText.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, erasingSpeed);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(type, delayBetween);
      } else {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, typingSpeed);
      }
    }
  }

  type();
});
