const formElem = document.getElementById("user-form");
const userNameInput = document.getElementById("Nome-cognome");
const kmPercorrereInput = document.getElementById("km");
const etaInput = document.getElementById("età");


formElem.addEventListener("submit", function (event) {
    console.log(event);
    event.preventDefault();

    //prelevo i valori
    const userName = userNameInput.value;
    const kmPercorrere = kmPercorrereInput.value;
    const eta = etaInput.value;

    console.log(userName, kmPercorrere, eta);

})