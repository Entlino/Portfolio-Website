document.addEventListener("DOMContentLoaded", () => {
  // --- Smooth Scrolling ---
  const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Calculate position considering fixed header height
        const headerOffset =
          document.querySelector(".main-header").offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Close mobile nav if open
        if (nav.classList.contains("active")) {
          nav.classList.remove("active");
          menuToggle.setAttribute("aria-expanded", "false");
        }
      }
    });
  });

  // --- Mobile Menu Toggle ---
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (menuToggle && nav) {
    menuToggle.setAttribute("aria-expanded", "false"); // Initial state

    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      const isExpanded = nav.classList.contains("active");
      menuToggle.setAttribute("aria-expanded", isExpanded);
    });
  }

  // --- Simple fade-in effect for sections (Optional) ---
  const sections = document.querySelectorAll(".content-section, .hero-section");
  const observerOptions = {
    root: null, // relative to document viewport
    rootMargin: "0px",
    threshold: 0.1, // trigger when 10% of the section is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        // Optional: stop observing after animation
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(section);
  });
}); // End DOMContentLoaded

// --- Simple fade-in effect for sections (Optional) ---
const sections = document.querySelectorAll(".content-section, .hero-section"); // Include hero if you want it to fade too (might cause FOUC)
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      // Choose ONE transform style:
      entry.target.style.transform = "translateY(0)"; // Original vertical
      // entry.target.style.transform = 'translate(0, 0)'; // If using combined X/Y
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach((section) => {
  section.style.opacity = "0";
  // Choose ONE initial transform:
  section.style.transform = "translateY(30px)"; // Original vertical, slightly more distance
  // section.style.transform = 'translate(20px, 20px)'; // If using combined X/Y
  section.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out"; // Slightly slower?
  observer.observe(section);
});
