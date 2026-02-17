const setup = () => {
    let namen = ["Finn", "Arthur", "Luna", "Nova", "Milo"];
    console.log(namen.length);
    console.log(namen[0], namen[2], namen[4]);

    const VoegNaamToe = (arr) => {
        let nieuweNaam = prompt("Voer een naam in:");
        if (nieuweNaam) {
            arr.push(nieuweNaam);
        }
    }
    VoegNaamToe(namen);
    console.log(namen);

    let namenStr = namen.toString()
    console.log(namenStr);
}
window.addEventListener("load", setup);