(function () {
  "use strict";

  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navMenu.classList.toggle("is-open", !isOpen);
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("is-open");
      });
    });
  }

  const filterButtons = document.querySelectorAll(".filter-btn");
  const characterCards = document.querySelectorAll(".character-card");

  if (filterButtons.length && characterCards.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const category = btn.dataset.filter;

        filterButtons.forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
        });

        characterCards.forEach(function (card) {
          const matches = category === "all" || card.dataset.category === category;
          card.classList.toggle("is-hidden", !matches);
        });
      });
    });
  }

  const contactForm = document.getElementById("contact-form");
  const formSuccess = document.getElementById("form-success");

  if (contactForm && formSuccess) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      contactForm.style.display = "none";
      formSuccess.classList.add("is-visible");
    });
  }
})();
