const setup = () => {

    document.getElementById("calculate").addEventListener("click", berekenTotaal);
};

const formatValuta = (bedrag) => {

    return `${bedrag.toFixed(2).replace(".", ",")} Eur`;
};

const berekenTotaal = () => {

    let totaal = 0;

    const rijen = document.querySelectorAll("table tr");
    for (let i = 1; i < rijen.length; i++) {
        const rij = rijen[i];

        if (rij.cells.length < 5) continue;

        const prijsTekst = rij.cells[1].textContent.replace(" Eur", "").replace(",", ".");
        const prijs = parseFloat(prijsTekst);

        const hoeveelheid = parseInt(rij.cells[2].querySelector("input").value) || 0;

        const btwTekst = rij.cells[3].textContent.replace("%", "").trim();
        const btw = parseFloat(btwTekst) / 100;

        const subTotaal = hoeveelheid * prijs * (1 + btw);
        rij.cells[4].textContent = formatValuta(subTotaal);

        totaal += subTotaal;
    }

    document.getElementById("totalPrice").textContent = formatValuta(totaal);
};

window.addEventListener("load", setup);
