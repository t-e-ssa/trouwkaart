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
const reclameTekst = document.querySelector(".reclame");
const kaart = document.querySelector(".kaart");
const achtergrondKleurSelecteren = document.querySelector("#achtergrondKleurSelecteren");
const tekstKleurSelecteren = document.querySelector("#tekstKleurSelecteren");
const omlijningKleurSelecteren = document.querySelector("#omlijningKleurSelecteren");
const teBetalenBedrag = document.querySelector(".teBetalenBedrag");
const trouwDatumKnopGeluid = document.getElementById("trouwDatum");
const partnerNamenKnopGeluid = document.getElementById("partnerNamen");
const inloggenKnopGeluid = document.getElementById("inloggenKnop");
const trouwLocatieKnopGeluid = document.getElementById("trouwLocatie");


let h1Element = document.querySelector("h1");
let huidigePrijs = 0.00;


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
    /* Code bronvermelding: https://www.youtube.com/watch?v=3xlws5og44U */
}

function veranderAchtergrond() {
    let kleur = achtergrondKleurSelecteren.value;
    kaart.style.backgroundColor = kleur;
    /* Code bronvermelding: https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_color */
}

function veranderTekstKleur() {
    let tekst = tekstKleurSelecteren.value;
    h5.style.color = tekst;
}

function veranderOmlijningKleur() {
    let geselecteerdeKleur = omlijningKleurSelecteren.value;
    kaart.style.borderColor = geselecteerdeKleur;
}

function prijsVerandering() {
    huidigePrijs += 5.00;
    teBetalenBedrag.textContent = "€" + huidigePrijs + ",00 euro te betalen";

    if (huidigePrijs == 10.00) {
        alert("Pas op! Je te betalen bedrag is 10 euro.");
        /* Code bronvermelding: https://www.w3schools.com/jsref/met_win_alert.asp */
    } else if (huidigePrijs > 20.00) {
        alert("Pas op! Je te betalen bedrag is al hoger dan 20 euro.")
    }       
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
partnerNamenKnop.addEventListener("click", prijsVerandering);
trouwDatumKnop.addEventListener("click", prijsVerandering);
trouwLocatieKnop.addEventListener("click", prijsVerandering);