// ====== Año automático en el pie ======
document.getElementById("year").textContent = new Date().getFullYear();

// ====== Borde de la cabecera al hacer scroll ======
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 10);
});

// ====== Menú móvil ======
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("is-open");
  nav.classList.toggle("is-open");
});
nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    menuToggle.classList.remove("is-open");
    nav.classList.remove("is-open");
  })
);

// ====== Buscador (filtra los productos de la página) ======
const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
document.getElementById("searchOpen").addEventListener("click", () => {
  searchOverlay.classList.add("is-open");
  setTimeout(() => searchInput.focus(), 200);
});
document.getElementById("searchClose").addEventListener("click", closeSearch);
function closeSearch() {
  searchOverlay.classList.remove("is-open");
}
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const q = searchInput.value.trim().toLowerCase();
    document.querySelectorAll(".product").forEach((p) => {
      const name = p.querySelector("h3").textContent.toLowerCase();
      p.style.display = !q || name.includes(q) ? "" : "none";
    });
    closeSearch();
    document.getElementById("tienda").scrollIntoView();
  }
  if (e.key === "Escape") closeSearch();
});

// ====== Carrito sencillo (se guarda en el navegador) ======
const drawer = document.getElementById("cartDrawer");
const backdrop = document.getElementById("backdrop");
const cartList = document.getElementById("cartList");
const cartEmpty = document.getElementById("cartEmpty");
const cartCount = document.getElementById("cartCount");

let cart = [];
try { cart = JSON.parse(localStorage.getItem("carrito")) || []; } catch (e) {}

function saveCart() {
  try { localStorage.setItem("carrito", JSON.stringify(cart)); } catch (e) {}
}
function renderCart() {
  cartList.innerHTML = "";
  cart.forEach((item, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${item}</span><button data-i="${i}">Quitar</button>`;
    cartList.appendChild(li);
  });
  cartEmpty.style.display = cart.length ? "none" : "block";
  cartCount.textContent = cart.length;
}
function openCart() { drawer.classList.add("is-open"); backdrop.classList.add("is-open"); }
function closeCart() { drawer.classList.remove("is-open"); backdrop.classList.remove("is-open"); }

document.querySelectorAll(".product__add").forEach((btn) =>
  btn.addEventListener("click", () => {
    cart.push(btn.dataset.name);
    saveCart(); renderCart(); openCart();
  })
);
cartList.addEventListener("click", (e) => {
  if (e.target.dataset.i !== undefined) {
    cart.splice(e.target.dataset.i, 1);
    saveCart(); renderCart();
  }
});
document.getElementById("cartOpen").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
document.getElementById("cartContinue").addEventListener("click", closeCart);
backdrop.addEventListener("click", closeCart);
renderCart();

// ====== Newsletter ======
// Si configuras Formspree (ver README), pon tu enlace en el "action" del formulario
// y este código enviará el email de verdad.
const form = document.getElementById("newsletterForm");
const msg = document.getElementById("newsletterMsg");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const action = form.getAttribute("action");
  if (action && action !== "#") {
    try {
      await fetch(action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
    } catch (err) {}
  }
  msg.textContent = "¡Gracias por suscribirte!";
  form.reset();
});

// ====== Animación de aparición al hacer scroll ======
const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Tecla Escape cierra todo
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { closeCart(); closeSearch(); }
});
