const revealEls = document.querySelectorAll(".reveal");
const navLinks = document.querySelectorAll(".site-nav a");
const sections = document.querySelectorAll("main section[id]");
const yearEl = document.getElementById("year");
const lightbox = document.getElementById("image-lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");
const lightboxTriggers = document.querySelectorAll(".image-lightbox-trigger");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if ("IntersectionObserver" in window && revealEls.length > 0) {
  document.documentElement.classList.add("reveal-enabled");
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      // 0.15 can fail on very tall sections in mobile view.
      threshold: 0.01,
      rootMargin: "0px 0px -5% 0px",
    }
  );
  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}

if ("IntersectionObserver" in window && sections.length > 0 && navLinks.length > 0) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    {
      // Lower threshold + margins keep active nav stable on small screens.
      threshold: 0.05,
      rootMargin: "-35% 0px -55% 0px",
    }
  );
  sections.forEach((section) => sectionObserver.observe(section));
}

if (lightbox && lightboxImage && lightboxClose && lightboxTriggers.length > 0) {
  const closeLightbox = () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    lightboxImage.setAttribute("src", "");
    lightboxImage.setAttribute("alt", "");
  };

  lightboxTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      const src = trigger.getAttribute("href");
      const triggerImage = trigger.querySelector("img");
      if (!src || !triggerImage) return;

      lightboxImage.setAttribute("src", src);
      lightboxImage.setAttribute("alt", triggerImage.getAttribute("alt") || "");
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("lightbox-open");
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("open")) {
      closeLightbox();
    }
  });
}
