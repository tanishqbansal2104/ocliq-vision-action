// ===============
// Ocliq Landing Page Script
// ===============
(function () {
  const demoForm = document.getElementById("demoForm");
  const result = document.getElementById("result");
  const clearBtn = document.getElementById("clearBtn");

  // Simulated Alert Demo
  demoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const event = document.getElementById("event").value;
    const action = document.getElementById("action").value;
    const phone = document.getElementById("phone").value.trim();

    if (!phone) {
      result.innerText = "Please enter a phone number.";
      result.style.borderColor = "rgba(255,80,80,0.4)";
      return;
    }

    const now = new Date().toLocaleString();
    const eventMap = {
      idle: "Idle counter > 2 min",
      crowd: "Crowd detected",
      motion: "Motion at night",
      loiter: "Loitering detected",
    };

    const actionLabel = action === "whatsapp" ? "WhatsApp Message" : "Phone Call";

    result.innerHTML = `
      <strong>Simulated Alert</strong><br/>
      <em>${now}</em><br/>
      Event: <strong>${eventMap[event] || event}</strong><br/>
      Action: <strong>${actionLabel}</strong><br/>
      Recipient: <strong>${escapeHtml(phone)}</strong><br/>
      <div style="margin-top:8px;color:var(--muted)">
        Note: This is a demo UI only — no real message was sent.
      </div>
    `;
    result.style.borderColor = "rgba(111,91,255,0.2)";
  });

  // Clear button
  clearBtn.addEventListener("click", () => {
    document.getElementById("phone").value = "";
    result.innerHTML = "";
    result.style.borderColor = "rgba(255,255,255,0.03)";
  });

  // Contact form demo (no backend)
  const contactSubmit = document.getElementById("contactSubmit");
  contactSubmit.addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
      alert("Please enter name and email to request a demo.");
      return;
    }

    alert(`Thanks, ${name}! Your demo request has been received. We'll contact you soon.`);
  });

  // Helper: escape HTML
  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
})();
