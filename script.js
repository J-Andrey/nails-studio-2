/* ===== MENU ===== */
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
  toggle.classList.toggle("active"); // anima o botão
});

/* FECHAR MENU CLICANDO FORA */
overlay.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("active");
  toggle.classList.remove("active");
});

/* FECHAR MENU AO CLICAR EM LINK */
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
    toggle.classList.remove("active");
  });
});


/* ===== LIGHTBOX ===== */
const images = document.querySelectorAll(".galeria-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.getElementById("close");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

/* FECHAR NO X */
close.addEventListener("click", () => {
  lightbox.style.display = "none";
});

/* FECHAR CLICANDO FORA DA IMAGEM */
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

/* FECHAR COM ESC */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = "none";
  }
});