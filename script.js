// menu mobile
let boutonMenu = document.getElementById("bouton-menu");
let menu = document.getElementById("menu");

boutonMenu.addEventListener("click", function () {
  menu.classList.toggle("ouvert");
});

// mode sombre
let boutonTheme = document.getElementById("bouton-theme");

if (localStorage.getItem("theme") === "sombre") {
  document.body.classList.add("sombre");
  boutonTheme.textContent = "☀";
}

boutonTheme.addEventListener("click", function () {
  document.body.classList.toggle("sombre");

  if (document.body.classList.contains("sombre")) {
    localStorage.setItem("theme", "sombre");
    boutonTheme.textContent = "☀";
  } else {
    localStorage.setItem("theme", "clair");
    boutonTheme.textContent = "☾";
  }
});
