const setup = () => {

    const button = document.getElementById("submit");
    button.addEventListener("click", (e) => {
        e.preventDefault();

        let roker = document.getElementById("roker");
        let moedertaal = document.getElementById("moedertaal");
        let buurland = document.getElementById("buurland");
        let bestelling = document.getElementById("bestelling");

        let isRoker;

        if (roker.checked) {isRoker = "een"} else {isRoker = "geen"}


        const resultaat = document.getElementById("resultaat");

        resultaat.innerText = "\n is " + isRoker + " roker \n" + "moedertaal is " + moedertaal + " \n favoriete buurland is " + buurland + "\n bestelling bestaat uit " + bestelling;
    })



}
window.addEventListener("load", setup);