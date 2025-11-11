// Simple demo: fake "Notify Me" submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const thanks = document.getElementById('thanks');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    form.reset();
    thanks.textContent = `Thanks, ${email}! We'll notify you soon.`;
  });
});
