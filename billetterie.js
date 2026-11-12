let formulaire = document.getElementById("formulaire");
let tribune = document.getElementById("tribune");
let places = document.getElementById("places");
let prixTotal = document.getElementById("prix-total");

// calcul du prix
function calculerPrix() {
  let prix = Number(tribune.value) * Number(places.value);
  prixTotal.textContent = prix + " €";
}

tribune.addEventListener("change", calculerPrix);
places.addEventListener("input", calculerPrix);

// verif du formulaire
function erreur(champ, idMessage, message) {
  document.getElementById(idMessage).textContent = message;
  if (message === "") {
    champ.classList.remove("invalide");
  } else {
    champ.classList.add("invalide");
  }
}

formulaire.addEventListener("submit", function (event) {
  event.preventDefault();

  let nom = document.getElementById("nom");
  let prenom = document.getElementById("prenom");
  let email = document.getElementById("email");
  let conditions = document.getElementById("conditions");
  let toutEstBon = true;

  if (nom.value.trim() === "") {
    erreur(nom, "erreur-nom", "Le nom est obligatoire.");
    toutEstBon = false;
  } else {
    erreur(nom, "erreur-nom", "");
  }

  if (prenom.value.trim() === "") {
    erreur(prenom, "erreur-prenom", "Le prénom est obligatoire.");
    toutEstBon = false;
  } else {
    erreur(prenom, "erreur-prenom", "");
  }

  if (!email.value.includes("@") || !email.value.includes(".")) {
    erreur(email, "erreur-email", "Adresse e-mail invalide.");
    toutEstBon = false;
  } else {
    erreur(email, "erreur-email", "");
  }

  if (tribune.value === "0") {
    erreur(tribune, "erreur-tribune", "Choisis une tribune.");
    toutEstBon = false;
  } else {
    erreur(tribune, "erreur-tribune", "");
  }

  if (places.value < 1 || places.value > 10) {
    erreur(places, "erreur-places", "Il faut entre 1 et 10 places.");
    toutEstBon = false;
  } else {
    erreur(places, "erreur-places", "");
  }

  if (!conditions.checked) {
    document.getElementById("erreur-conditions").textContent = "Vous devez accepter les conditions générales de vente.";
    toutEstBon = false;
  } else {
    document.getElementById("erreur-conditions").textContent = "";
  }

  if (toutEstBon) {
    let messageOk = document.getElementById("message-ok");
    messageOk.textContent = "Merci " + prenom.value + " ! Ta réservation de " + places.value + " place(s) est bien enregistrée. Total : " + prixTotal.textContent;
    messageOk.style.display = "block";
  }
});
