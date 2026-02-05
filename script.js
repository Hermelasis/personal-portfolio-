const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a[href^='#']");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => navLinks.classList.remove("open"));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navItems.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`,
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" },
);

sections.forEach((section) => observer.observe(section));
