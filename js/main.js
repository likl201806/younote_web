function toggleMobileMenu() {
  const navLinks = document.getElementById("navLinks");
  const navbarRight = document.querySelector(".navbar-right");
  navLinks?.classList.toggle("active");
  navbarRight?.classList.toggle("active");
}

function toggleFaq(element) {
  const item = element.closest(".faq-item");
  if (!item) return;
  const isActive = item.classList.contains("active");
  document.querySelectorAll(".faq-item").forEach((faq) => faq.classList.remove("active"));
  if (!isActive) item.classList.add("active");
}

function toggleLanguageDropdown() {
  document.getElementById("language-selector")?.classList.toggle("active");
}

document.addEventListener("click", (event) => {
  const selector = document.getElementById("language-selector");
  if (selector && !selector.contains(event.target)) {
    selector.classList.remove("active");
  }
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks")?.classList.remove("active");
    document.querySelector(".navbar-right")?.classList.remove("active");
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    const navHeight = document.querySelector(".navbar")?.offsetHeight || 64;
    window.scrollTo({ top: target.offsetTop - navHeight - 20, behavior: "smooth" });
  });
});

function setupFadeIn() {
  const elements = document.querySelectorAll(".fade-in");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  elements.forEach((element) => observer.observe(element));
}

function setupNavbarShadow() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;
  navbar.style.boxShadow = window.scrollY > 10 ? "var(--shadow-sm)" : "none";
}

document.addEventListener("DOMContentLoaded", () => {
  setupFadeIn();
  setupNavbarShadow();
  window.addEventListener("scroll", setupNavbarShadow, { passive: true });
});
