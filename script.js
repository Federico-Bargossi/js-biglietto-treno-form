const formElem = document.getElementById("user-form");
const userNameInput = document.getElementById("Nome-cognome");
const kmPercorrereInput = document.getElementById("km");
const etaInput = document.getElementById("età");

const nomeCognomeElem = document.getElementById("nomeCognome-card");
const offertaElem = document.getElementById("offerta-card");
const prezzoElem = document.getElementById("prezzoBiglietto-card");


formElem.addEventListener("submit", function (event) {
    console.log(event);
    event.preventDefault();

    //prelevo i valori
    const userName = userNameInput.value;
    const kmPercorrere = kmPercorrereInput.value;
    const eta = etaInput.value;

    console.log(userName, kmPercorrere, eta);

    const prezzoKm = 0.21;

    let prezzoTotale = kmPercorrere * prezzoKm;
    let offerta = 'Biglietto standard'

    if (eta.includes('Minorenne')) {
        //sconto 20%
        prezzoTotale *= 0.80;
        offerta = 'Biglietto ridotto minorenni'
    } else if (eta.includes('Over 65')) {
        prezzoTotale *= 0.60;
        offerta = 'Biglietto ridotto over 65'
    }

    prezzoTotale = prezzoTotale.toFixed(2);

    nomeCognomeElem.innerHTML = userName;
    offertaElem.innerHTML = offerta;
    prezzoElem.innerHTML = prezzoTotale;

    console.log(`il prezzo totale risulta ${prezzoTotale}`);
    console.log(offerta);

})