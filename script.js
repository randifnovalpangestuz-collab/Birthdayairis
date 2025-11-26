document.addEventListener("DOMContentLoaded", () => {
  // Fade-in untuk semua elemen yang punya class "fade"
  const fadeElements = document.querySelectorAll(".fade");
  fadeElements.forEach(el => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.transition = "opacity 1.5s";
      el.style.opacity = 1;
    }, 300);
  });

  // Animasi muncul untuk button
  const btn = document.querySelector(".btn");
  if (btn) {
    btn.style.transform = "scale(0.8)";
    btn.style.opacity = 0;

    setTimeout(() => {
      btn.style.transition = "all 0.5s";
      btn.style.transform = "scale(1)";
      btn.style.opacity = 1;
    }, 800);
  }
});