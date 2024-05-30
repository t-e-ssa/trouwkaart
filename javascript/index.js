const inloggenKnop = document.querySelector("#inloggenKnop");
const partnerNamenKnop = document.querySelector("#partnerNamen");
const trouwDatumKnop = document.querySelector("#trouwDatum");
const trouwLocatieKnop = document.querySelector("#trouwLocatie");
const naamInput1 = document.getElementById("naamInput1");
const naamInput2 = document.getElementById("naamInput2");
const trouwDatumInput = document.getElementById("trouwDatumInput");
const trouwLocatieInput = document.getElementById("trouwLocatieInput");
const h5 = document.querySelector("h5");
const h6 = document.querySelector("h6");
const p = document.querySelector(".kaart p");
const reclameTekst = document.querySelector(".kaartelementenAanpassen p");
const kaart = document.querySelector(".kaart");
const achtergrondKleurSelecteren = document.querySelector("#achtergrondKleurSelecteren");
const tekstKleurSelecteren = document.querySelector("#tekstKleurSelecteren");
const omlijningKleurSelecteren = document.querySelector("#omlijningKleurSelecteren");


let h1Element = document.querySelector("h1");
let trouwDatumKnopGeluid = document.getElementById("trouwDatum");
let partnerNamenKnopGeluid = document.getElementById("partnerNamen");
let inloggenKnopGeluid = document.getElementById("inloggenKnop");
let trouwLocatieKnopGeluid = document.getElementById("trouwLocatie");


function groet() {
    h1Element.textContent = "Welkom Tessa bij Bruiloftskaarten DIY!";
}

function partnerNamen_weergeven() {
    const naam1 = naamInput1.value;
    const naam2 = naamInput2.value;  
    h5.textContent = "Dit is een uitnodiging van de bruiloft van " + naam1 + " en " + naam2 + ".";
}

function trouwDatum_weergeven() {
    const datum = trouwDatumInput.value;
    h6.textContent = "Op " + datum + " geven wij elkaar het ja-woord. We nodigen je uit om bij dit mooie moment te kunnen zijn.";
}

function trouwLocatie_weergeven() {
    const locatie = trouwLocatieInput.value;
    p.textContent = "Locatie: " + locatie + ".";
}

function showReclame() {
    reclameTekst.textContent = "";
    setTimeout(toonReclame,10000);
}

function toonReclame() {
    reclameTekst.textContent = "Bestel nu! - Gratis proefdruk & krijg 10% korting op je eerste bestelling!";
}

showReclame();

function speelAf() {
    let geluid = new Audio("sound/mouse-click-153941.mp3");
    /* Geluid bronvermelding: https://pixabay.com/nl/sound-effects/search/mouse%20click/ */
    geluid.play();
    /* Code Bronvermelding: https://www.youtube.com/watch?v=3xlws5og44U */
}

function veranderAchtergrond() {
    let kleur = achtergrondKleurSelecteren.value;
    kaart.style.backgroundColor = kleur;
    /* Code Bronvermelding: https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_color */
}

function veranderTekstKleur() {
    let tekst = tekstKleurSelecteren.value;
    h5.style.color = tekst;
}

function veranderOmlijningKleur() {
    let geselecteerdeKleur = omlijningKleurSelecteren.value;
    kaart.style.borderColor = geselecteerdeKleur;
}


inloggenKnop.addEventListener("click", groet);
partnerNamenKnop.addEventListener("click", partnerNamen_weergeven);
trouwDatumKnop.addEventListener("click", trouwDatum_weergeven);
trouwLocatieKnop.addEventListener("click", trouwLocatie_weergeven);
trouwDatumKnopGeluid.addEventListener("click", speelAf);
partnerNamenKnopGeluid.addEventListener("click", speelAf);
inloggenKnopGeluid.addEventListener("click", speelAf);
trouwLocatieKnopGeluid.addEventListener("click", speelAf);
achtergrondKleurSelecteren.addEventListener("change", veranderAchtergrond);
tekstKleurSelecteren.addEventListener("change", veranderTekstKleur);
omlijningKleurSelecteren.addEventListener("change", veranderOmlijningKleur);







/* Nog te gebruiken
function tijdSchemaAangeven(tijdstipEen, tijdstipTwee, tijdstipDrie, tijdstipVier, tijdstipVijf) {
    console.log("Ontvangst " + tijdstipEen);
    console.log("Ceremonie " + tijdstipTwee);
    console.log("Champagne time " + tijdstipDrie);
    console.log("Wedding diner " + tijdstipVier);
    console.log("Dance & drinks " + tijdstipVijf);
}

tijdSchemaAangeven("12:30", "13:00", "14:30", "18:00", "20:30");

function locatieAangeven(straatnaam, huisnummer, postcode, plaatsnaam) {
    console.log(straatnaam + " " + huisnummer + ", " + postcode + " " + plaatsnaam);
}

locatieAangeven("Langstraat", "8", "1705NH", "Heerhugowaard");

function telefoonNummerAangeven() */