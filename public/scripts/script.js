document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, {});
  const sectionElements = document.querySelectorAll("section, footer");
  sectionElements.forEach((el) => observer.observe(el));
});
