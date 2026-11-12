// carrousel
let diapos = document.querySelectorAll(".diapo");
let numero = 0;

function afficherDiapo(n) {
  diapos[numero].classList.remove("active");

  numero = n;
  if (numero >= diapos.length) {
    numero = 0;
  }
  if (numero < 0) {
    numero = diapos.length - 1;
  }

  diapos[numero].classList.add("active");
}

document.getElementById("suivant").addEventListener("click", function () {
  afficherDiapo(numero + 1);
});

document.getElementById("precedent").addEventListener("click", function () {
  afficherDiapo(numero - 1);
});

setInterval(function () {
  afficherDiapo(numero + 1);
}, 4000);

// compte a rebours
let dateCourse = new Date("2027-06-06T15:00:00");

function compteARebours() {
  let maintenant = new Date();
  let reste = dateCourse - maintenant;

  let jours = Math.floor(reste / (1000 * 60 * 60 * 24));
  let heures = Math.floor(reste / (1000 * 60 * 60)) % 24;
  let minutes = Math.floor(reste / (1000 * 60)) % 60;
  let secondes = Math.floor(reste / 1000) % 60;

  document.getElementById("jours").textContent = jours;
  document.getElementById("heures").textContent = heures;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("secondes").textContent = secondes;
}

compteARebours();
setInterval(compteARebours, 1000);
