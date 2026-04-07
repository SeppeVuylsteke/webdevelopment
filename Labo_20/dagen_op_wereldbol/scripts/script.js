const setup = () => {

    let today = new Date();
    let geboorteDatum = new Date(2007, 5, 20);

    let dagenOpWereldBol = today - geboorteDatum;

    dagenOpWereldBol = Math.round(dagenOpWereldBol / 60000 / 60 / 24);

    console.log(dagenOpWereldBol + " dagen op de wereld");
}
window.addEventListener("load", setup);