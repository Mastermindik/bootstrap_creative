window.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("#nav");
  function navbarShrink() {
    if (!navbar) {
      return;
    }
    if (window.innerWidth < 992 || window.scrollY !== 0) {
      navbar.classList.add("navbar-shrink");
    } else {
      navbar.classList.remove("navbar-shrink");
    }
  }
  navbarShrink();
  document.addEventListener("scroll", navbarShrink);

  function getColor() {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".nav-link");
    let visibleSection = null;
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top - navbar.scrollHeight <= 0) {
        visibleSection = section;
      }
    })
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (visibleSection.id !== "" && link.hash === "#" + visibleSection.id) {
        link.classList.add("active");
      }
    })
  }
  document.addEventListener("scroll", getColor);

  $('.navbar-toggler').click(() => {
    $('.navbar-collapse').toggleClass('show');
  })
  $('.nav-link').click(() => {
    $('.navbar-collapse').removeClass('show');
  });
})