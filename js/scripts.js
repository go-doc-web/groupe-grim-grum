// Custom Scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
  });
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
  });
}
burgerMenu();

const concerts = [
  {
    city: "Київ",
    venue: "Docker-G Pub",
    seats: 250,
    datetime: "26.10.2025, 15:00",
  },
  {
    city: "Львів",
    venue: "!FESTrepublic",
    seats: 400,
    datetime: "01.11.2025, 20:00",
  },
  {
    city: "Одеса",
    venue: "Зелений театр",
    seats: 700,
    datetime: "09.11.2025, 19:30",
  },
  {
    city: "Харків",
    venue: "ArtZavod",
    seats: 500,
    datetime: "16.11.2025, 20:00",
  },
];

const tBody = document.querySelector(".table-body");
concerts.forEach((concert) => {
  const row = document.createElement("tr");
  row.innerHTML = `
            <td>${concert.city} — ${concert.venue}</td>
            <td>${concert.seats}</td>
            <td>${concert.datetime}</td>
            <td><button class="table-btn btn">Замовити квиток</button></td>

    `;
  tBody.appendChild(row);
});

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

