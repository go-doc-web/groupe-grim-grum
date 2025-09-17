document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (!form) {
    console.error('Форма з ID "contactForm" не знайдена.');
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const nameError = nameInput.nextElementSibling;
    const emailError = emailInput.nextElementSibling;
    const messageError = messageInput.nextElementSibling;

    let isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    if (nameInput.value.trim() === "") {
      nameError.textContent = "Ім'я є обов'язковим.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
      emailError.textContent = "Email є обов'язковим.";
      isValid = false;
    } else if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = "Будь ласка, введіть коректний email.";
      isValid = false;
    }

    if (messageInput.value.trim() === "") {
      messageError.textContent = "Повідомлення є обов’язковим.";
      isValid = false;
    }

    if (isValid) {
      // Якщо форма валідна, створюємо GET-запит
      const formData = new FormData(form);
      const queryString = new URLSearchParams(formData).toString();
      const url = `submit-form?${queryString}`;

      alert(`Дані форми валідні. Відправляємо GET запит на URL:${url}`);
      console.log("Дані форми валідні. Відправляємо GET запит на URL:");
      console.log(url);

      form.reset();
    }
  });
});
