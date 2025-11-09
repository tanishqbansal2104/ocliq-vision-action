// Small demo script — simulates alerts (no real messages are sent).
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('demoForm');
  const result = document.getElementById('result');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const eventType = document.getElementById('eventSelect').value;
    const action = document.getElementById('actionSelect').value;
    const phone = document.getElementById('phoneInput').value.trim();

    if (!phone) {
      showMessage('Please enter a recipient phone number (e.g. +91xxxxxxxxxx)', true);
      return;
    }

    // Map event to friendly names
    const eventNames = {
      idle_counter: 'Idle counter > 2 min',
      crowd: 'Crowd detected',
      motion_night: 'Motion at night',
      loitering: 'Loitering detected'
    };

    const now = new Date().toLocaleString();
    const actionLabel = action === 'whatsapp' ? 'WhatsApp message' : 'Phone call';
    const message = `
      <strong>Simulated alert</strong><br/>
      <em>${now}</em><br/>
      Event: <strong>${eventNames[eventType] || eventType}</strong><br/>
      Action: <strong>${actionLabel}</strong><br/>
      Recipient: <strong>${escapeHtml(phone)}</strong><br/>
      <div style="margin-top:8px;color:var(--muted)">Note: This is a demo UI only — no real message was sent.</div>
    `;
    result.innerHTML = message;
  });

  function showMessage(text, isError = false) {
    result.textContent = text;
    if (isError) result.style.borderColor = 'rgba(255,80,80,0.3)';
    else result.style.borderColor = 'rgba(255,255,255,0.03)';
  }

  // basic escaping
  function escapeHtml(str){
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
});
