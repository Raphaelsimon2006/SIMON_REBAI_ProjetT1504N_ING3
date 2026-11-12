// boutons en savoir +
let boutons = document.querySelectorAll(".bouton-details");

for (let i = 0; i < boutons.length; i++) {
  boutons[i].addEventListener("click", function () {
    let texte = boutons[i].previousElementSibling;
    texte.classList.toggle("ouvert");

    if (texte.classList.contains("ouvert")) {
      boutons[i].textContent = "Réduire -";
    } else {
      boutons[i].textContent = "En savoir +";
    }
  });
}
