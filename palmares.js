// recherche dans le tableau
let recherche = document.getElementById("recherche");
let lignes = document.querySelectorAll("#tableau tbody tr");
let compteur = document.getElementById("compteur");

recherche.addEventListener("input", function () {
  let texte = recherche.value.toLowerCase();
  let nombre = 0;

  for (let i = 0; i < lignes.length; i++) {
    let contenu = lignes[i].textContent.toLowerCase();

    if (contenu.includes(texte)) {
      lignes[i].style.display = "";
      nombre++;
    } else {
      lignes[i].style.display = "none";
    }
  }

  compteur.textContent = nombre + " résultat(s)";
});
