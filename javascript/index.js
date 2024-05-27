console.log("Het document is gekoppeld");

/* constanten, let variabele, alle functies, event listeners */
const buttonE1 = document.querySelector("#naamveld");
const buttonE2 = document.querySelector("#partnerNamen");
const buttonE3 = document.querySelector("#trouwDatum");
const naamInput1 = document.getElementById("naamInput1");
const naamInput2 = document.getElementById("naamInput2");
const trouwDatumInput = document.getElementById("trouwDatumInput");
const h5 = document.querySelector("h5");
const h6 = document.querySelector("h6");
const reclameTekst = document.querySelector(".kaartelementen_aanpassen_tekst p");

let h1Element = document.querySelector("h1");

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

buttonE1.addEventListener("click", groet);
buttonE2.addEventListener("click", partnerNamen_weergeven);
buttonE3.addEventListener("click", trouwDatum_weergeven);

function showReclame() {
    reclameTekst.textContent = "";
    setTimeout(toonReclame,10000);
}

function toonReclame() {
    reclameTekst.textContent = "Bestel nu! - Gratis proefdruk & krijg 10% korting op je eerste bestelling!";
}

showReclame();




let play = document.getElementById("play");

function SpeelAf() {
    let geluid = new Audio("geluid.mp3");
    geluid.play();
}

geluidKnop.addEventListener("click", SpeelAf);








/* Hier onder heb ik een vraag over */
const kaart = document.querySelector(".kaart");
const beigeKleur = document.getElementById("achtergrondkleur_beige");
const grijzeKleur = document.getElementById("achtergrondkleur_grijs");
const groeneKleur = document.getElementById("achtergrondkleur_groen");
const geleKleur = document.getElementById("achtergrondkleur_geel");

function veranderAchtergrond(kleur) {
    if (kleur === 'Beige') {
        kaart.style.backgroundColor = "#F2E6D8";
        /* Bronvermelding = https://programmersportal.com/how-to-change-the-background-color-on-button-click-in-javascript/ */
    } else if (kleur === 'Grijs') {
        kaart.style.backgroundColor = "#C7BDB0";
    } else if (kleur === 'Groen') {
        kaart.style.backgroundColor = "#98A6A2";
    } else if (kleur === 'Geel') {
        kaart.style.backgroundColor = "#EDD8B7";
    }
}
 veranderAchtergrond ('Beige');

beigeKleur.addEventListener ("click", veranderAchtergrond);

/*test */
const zwarteTekst = document.getElementById("tekstKleur_zwart");
const grijzeTekst = document.getElementById("tekstKleur_grijs");
const blauweTekst = document.getElementById("tekstKleur_blauw");
const bruineTekst = document.getElementById("tekstKleur_bruin");

function veranderTekstKleur (tekst) {
    if (tekst === 'Zwart') {
        h5.style.color = "#000000";
    } else if (tekst === 'Grijs') {
        h5.style.color = "#3D3D3D";
    } else if (tekst === 'Blauw') {
        h5.style.color = "#024059";
    } else if (tekst === 'Bruin') {
        h5.style.color = "#593E25";
    }
}

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