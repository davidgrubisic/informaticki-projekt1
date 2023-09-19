var KORISNIK = 0;

function loginKorisnika() {
    var today = new Date();
    var datum = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    var vrijeme = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var istinitost = false;

    var korisnikInput = prompt("Kako biste pristupili stranici, unesite Vaše ime (npr. Ivan)");

    if (korisnikInput !== null) { // Provjera da korisnik nije odustao od unosa
        var sumRegEx = /^[A-Z][a-zA-Z]*$/;
        istinitost = sumRegEx.test(korisnikInput);

        console.log("Unos imena ispravan? " + istinitost);

        if (istinitost) {
            console.log("Korisnik " + korisnikInput + " je ušao na stranicu " + datum + " u " + vrijeme);
            KORISNIK = korisnikInput;

            // Alert za pozdrav nakon unosa imena
            alert("Dobrodošao/la, " + korisnikInput + "!" + " Pogledaj ovaj mali projekt! :)");
        } else {
            console.log("Unos pogrešan " + korisnikInput + " " + datum + " u " + vrijeme);

            // Alert za neispravan unos
            alert("Unos imena nije ispravan. Molimo pokušajte ponovno.");
        }
    }
}

// Poziv funkcije pri učitavanju stranice
loginKorisnika();

function handleNaslovnicaClick(event) {
    // Provjerite trenutnu URL adresu stranice
    var trenutnaStranica = window.location.href;

    // Provjera je li trenutna stranica već "Naslovnica"
    if (trenutnaStranica.indexOf("index.html") !== -1) {
        alert("Već si na ovoj stranici");
        event.preventDefault();
    } else {
        // Ako trenutna stranica nije "Naslovnica", nastavite s preusmjeravanjem
        window.location.href = "index.html";
    }
}

// Dohvatite element "Naslovnica" iz navigacije
var naslovnicaLink = document.querySelector(".navbar-brand");

// Dodajte event listener za klik na "Naslovnica" link
naslovnicaLink.addEventListener("click", handleNaslovnicaClick);

