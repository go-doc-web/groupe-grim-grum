document.addEventListener("DOMContentLoaded", () => {
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

    window.addEventListener("resize", () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove("active");
        burger.classList.remove("active");
        body.classList.remove("locked");
      }
    });
  }
  burgerMenu();

  const argTrigger1 = ".hero__btn";
  const argTrigger2 = ".table-btn";

  const triggerList = `${argTrigger1}, ${argTrigger2}`;
  console.log("triggerList", triggerList);

  function bindModal(triggerSelectors, modalSelector, closeSelector) {
    const triggers = document.querySelectorAll(triggerSelectors);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const body = document.body;

    if (!triggers.length || !modal || !close) {
      console.error(
        "Не удалось найти все необходимые элементы для модального окна."
      );
      return;
    }

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
        body.classList.add("locked");
      });
    });

    close.addEventListener("click", () => {
      modal.style.display = "none";
      body.classList.remove("locked");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        body.classList.remove("locked");
      }
    });
  }

  bindModal(triggerList, ".modal__wrapper", ".modal__close");
});
