// Alternar tema escuro com persistência
const btnTema = document.getElementById("btnTema");

// Verifica se já existe preferência salva
if (localStorage.getItem("tema") === "escuro") {
  document.body.classList.add("dark-theme");
}

if (btnTema) {
  btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    // Salva a preferência no localStorage
    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("tema", "escuro");
    } else {
      localStorage.setItem("tema", "claro");
    }
  });
}

// Menu hambúrguer
const menuToggle = document.getElementById("menuToggle");
const menuLinks = document.getElementById("menuLinks");

if (menuToggle && menuLinks) {
  menuToggle.addEventListener("click", () => {
    menuLinks.classList.toggle("show");
  });
}