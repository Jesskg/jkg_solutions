function toggleMenu() {
  const menu = document.querySelector("#nav ul");
  if (menu) {
    menu.classList.toggle("open");
  }
}

function validateContactForm(event) {
  event.preventDefault();
  const form = event.target;
  const required = form.querySelectorAll("[required]");
  let valid = true;

  required.forEach((field) => {
    if (!field.value.trim()) {
      valid = false;
      field.style.borderColor = "#ef4444";
    } else {
      field.style.borderColor = "rgba(255, 255, 255, 0.12)";
    }
  });

  if (valid) {
    const message = document.querySelector(".success-message");
    if (message) {
      message.style.display = "block";
    }
    form.reset();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", validateContactForm);
  }
});
