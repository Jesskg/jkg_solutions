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
    // Show success message
    const message = document.querySelector(".success-message");
    if (message) {
      message.style.display = "block";
    }

    // Encode and submit the form data to Netlify
    const formData = new FormData(form);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
    .then(() => {
      form.reset();
    })
    .catch((error) => {
      console.error("Form submission error:", error);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form[name="contact"]');
    if (form) {
    form.addEventListener("submit", validateContactForm);
  }
});
