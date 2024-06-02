// -------------------------------------- Alle constanten -----------------------------------------------------------
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


// ------------------------------------------ Alle variabelen ---------------------------------------------------
let h1Element = document.querySelector("h1");
let huidigePrijs = 0.00;


// ------------------------------------------ Alle functies ----------------------------------------------------
// De gebruiker wordt begroet.
function groet() {
    h1Element.textContent = "Welkom Tessa bij Bruiloftskaarten DIY!";
}

// De partnernamen waarde uit het inputveld wordt weergegeven op kaart.
function partnerNamen_weergeven() {
    const naam1 = naamInput1.value;
    const naam2 = naamInput2.value;  
    h5.textContent = "Dit is een uitnodiging van de bruiloft van " + naam1 + " en " + naam2 + ".";
}

// De trouwdatum waarde uit het inputveld wordt weergegeven op kaart.
function trouwDatum_weergeven() {
    const datum = trouwDatumInput.value;
    h6.textContent = "Op " + datum + " geven wij elkaar het ja-woord. We nodigen je uit om bij dit mooie moment te kunnen zijn.";
}

// De locatiewaarde uit het inputveld wordt weergegeven op kaart.
function trouwLocatie_weergeven() {
    const locatie = trouwLocatieInput.value;
    p.textContent = "Locatie: " + locatie + ".";
}

// De reclame verschijnt na 10 seconden pas in beeld. 
function showReclame() {
    reclameTekst.textContent = "";
    setTimeout(toonReclame,10000);
}

// De reclame tekst komt in beeld te staan.
function toonReclame() {
    reclameTekst.textContent = "Bestel nu! - Gratis proefdruk & krijg 10% korting op je eerste bestelling!";
}

showReclame();

// Een geluid wordt afgespeelt zodra er op een knop wordt geklikt.
function speelAf() {
    let geluid = new Audio("sound/mouse-click-153941.mp3");
    /* Geluid bronvermelding: https://pixabay.com/nl/sound-effects/search/mouse%20click/ */
    geluid.play();
    /* Code bronvermelding: https://www.youtube.com/watch?v=3xlws5og44U */
}

// De achtergrondkleur van kaart wordt aangepast aan de waarde die uit de geselecteerde kleur komt.
function veranderAchtergrond() {
    let kleur = achtergrondKleurSelecteren.value;
    kaart.style.backgroundColor = kleur;
    /* Code bronvermelding: https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_color */
}

// De tekstkleur van kaart wordt aangepast aan de waarde die uit de geselecteerde kleur komt.
function veranderTekstKleur() {
    let tekst = tekstKleurSelecteren.value;
    h5.style.color = tekst;
}

// De rand van de kaart wordt aangepast aan de waarde die uit de geselecteerde kleur komt.
function veranderOmlijningKleur() {
    let geselecteerdeKleur = omlijningKleurSelecteren.value;
    kaart.style.borderColor = geselecteerdeKleur;
}

// Het te betalen bedrag wordt telkens verhoogt met 5 euro als er op een knop wordt geklikt.
function prijsVerandering() {
    huidigePrijs += 5.00;
    teBetalenBedrag.textContent = "€" + huidigePrijs + ",00 euro te betalen";

    if (huidigePrijs == 5.00) {
        alert("Pas op! Elke keer als u iets toevoegt, gaat het te betalen bedrag omhoog.");
        /* Code bronvermelding: https://www.w3schools.com/jsref/met_win_alert.asp */
    } else if (huidigePrijs > 50.00) {
        alert("Pas op! Je te betalen bedrag is al hoger dan 50 euro.")
    }    
}


// ------------------------------------------- Event listeners ------------------------------------------------------------
inloggenKnop.addEventListener("click", groet);
partnerNamenKnop.addEventListener("click", partnerNamen_weergeven);
trouwDatumKnop.addEventListener("click", trouwDatum_weergeven);
trouwLocatieKnop.addEventListener("click", trouwLocatie_weergeven);

trouwDatumKnopGeluid.addEventListener("click", speelAf);
partnerNamenKnopGeluid.addEventListener("click", speelAf);
inloggenKnopGeluid.addEventListener("click", speelAf);
trouwLocatieKnopGeluid.addEventListener("click", speelAf);
achtergrondKleurSelecteren.addEventListener("click", speelAf);
tekstKleurSelecteren.addEventListener("click", speelAf);
omlijningKleurSelecteren.addEventListener("click", speelAf);


achtergrondKleurSelecteren.addEventListener("change", veranderAchtergrond);
tekstKleurSelecteren.addEventListener("change", veranderTekstKleur);
omlijningKleurSelecteren.addEventListener("change", veranderOmlijningKleur);

partnerNamenKnop.addEventListener("click", prijsVerandering);
trouwDatumKnop.addEventListener("click", prijsVerandering);
trouwLocatieKnop.addEventListener("click", prijsVerandering);
achtergrondKleurSelecteren.addEventListener("click", prijsVerandering);
tekstKleurSelecteren.addEventListener("click", prijsVerandering);
omlijningKleurSelecteren.addEventListener("click", prijsVerandering);