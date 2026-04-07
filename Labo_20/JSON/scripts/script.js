const setup = () => {
    let student1 = {
        voornaam: "Jan",
        familienaam: "Janssens",
        geboorteDatum: new Date("1993-12-31"),
        adres: { // een object
            straat: "Kerkstraat 13",
            postcode: "8500",
            gemeente: "Kortrijk"
        },
        isIngeschreven: true,
        namenVanExen:
            ["Sofie", "Berta", "Philip", "Albertoooo", "Thorben DM"],
        aantalAutos: 2
    }

    console.log(JSON.stringify(student1));

    let string = JSON.stringify(student1);

    let voornaam = JSON.parse(string).voornaam;
    console.log(voornaam);
}
window.addEventListener("load", setup);