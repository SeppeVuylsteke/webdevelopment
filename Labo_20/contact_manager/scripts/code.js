let personen=[
    {
        voornaam: 'Jan',
        familienaam: 'Janssens',
        geboorteDatum: new Date('2010-10-10'),
        email: 'jan@example.com',
        aantalKinderen: 0
    },
    {
        voornaam: 'Mieke',
        familienaam: 'Mickelsen',
        geboorteDatum: new Date('1980-01-01'),
        email: 'mieke@example.com',
        aantalKinderen: 1
    },
    {
        voornaam: 'Piet',
        familienaam: 'Pieters',
        geboorteDatum: new Date('1970-12-31'),
        email: 'piet@example.com',
        aantalKinderen: 2
    }
];

let huidigeIndex = -1;

const lstPersonen = document.getElementById("lstPersonen");

// Controleert of er tekst staat in elementen met class "errorMessage"
const isFormulierGeldig = () => {
    let foutSpans = document.querySelectorAll(".errorMessage");
    for (let span of foutSpans) {
        if (span.innerHTML.trim() !== "") {
            return false;
        }
    }
    return true;
}

// Zet een Date-object om naar een string formaat (JJJJ-MM-DD) dat een HTML date-input begrijpt
const formateerDatum = (datum) => {
    let jaar = datum.getFullYear();
    let maand = String(datum.getMonth() + 1).padStart(2, '0');
    let dag = String(datum.getDate()).padStart(2, '0');
    return `${jaar}-${maand}-${dag}`;
};

// Voegt een nieuwe naam toe aan de zichtbare <select> lijst
const voegPersoonToe = (persoon, index) => {
    let option = document.createElement("option");
    option.id = index;
    option.textContent = persoon.voornaam + " " + persoon.familienaam;
    option.value = index;

    lstPersonen.appendChild(option);
}

// Haalt alle waarden uit de inputvelden en stopt ze in een object
const leesFormulier = () => {
    return {
        voornaam: document.getElementById("txtVoornaam").value.trim(),
        familienaam: document.getElementById("txtFamilienaam").value.trim(),
        geboorteDatum: new Date(document.getElementById("txtGeboorteDatum").value.trim()),
        email: document.getElementById("txtEmail").value.trim(),
        aantalKinderen: parseInt(document.getElementById("txtAantalKinderen").value.trim())
    }
}

// Maakt alle tekstvelden leeg en wist foutmeldingen
const leegFormulier = () => {
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";

    clearAllErrors();
}

// Vult het formulier met de gegevens van een geselecteerde persoon
const toonGegevens = (persoon) => {
    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = formateerDatum(persoon.geboorteDatum);
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;

    clearAllErrors();
}

// Werkt de tekst van een bestaande regel in de <select> lijst bij (na een update)
const updateOptie = (persoon, index) => {
    let option = document.getElementById(String(index));
    if (option) {
        option.textContent = persoon.voornaam + " " + persoon.familienaam;
    }
}

// Wordt uitgevoerd als de gebruiker een naam klikt in de lijst. Het spreekt dan de functie toonGegevens aan dat de juiste waarden retourneert
const selecteerPersoon = (event) => {
    huidigeIndex = parseInt(event.target.value);
    toonGegevens(personen[huidigeIndex]);
}

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // Kijkt of alle waarden correct zijn en volgens de juiste normen. Als dit niet zo is, stopt deze functie.
    valideer();
    if (!isFormulierGeldig()) {
        return
    }

    if (huidigeIndex === -1) {
        let gegevens = leesFormulier();

        let nieuwePersoon = {
            voornaam: gegevens.voornaam,
            familienaam: gegevens.familienaam,
            geboorteDatum: gegevens.geboorteDatum,
            email: gegevens.email,
            aantalKinderen: gegevens.aantalKinderen
        }

        personen.push(nieuwePersoon);

        let index = personen.length - 1;
        voegPersoonToe(nieuwePersoon, index);
        huidigeIndex = index;
        document.getElementById("lstPersonen").value = huidigeIndex;
    } else {
        let persoon = personen[huidigeIndex];

        let gegevens = leesFormulier();

        persoon.voornaam = gegevens.voornaam;
        persoon.familienaam = gegevens.familienaam;
        persoon.geboorteDatum = gegevens.geboorteDatum;
        persoon.email = gegevens.email;
        persoon.aantalKinderen = gegevens.aantalKinderen;

        updateOptie(persoon, huidigeIndex);
    }

};

const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    huidigeIndex = -1;
    leegFormulier();

    document.getElementById("lstPersonen").value = "";
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", selecteerPersoon);

    let index = 0;
    personen.forEach((persoon) => {
        voegPersoonToe(persoon, index);
        index++;
    })
};



window.addEventListener("load", setup);