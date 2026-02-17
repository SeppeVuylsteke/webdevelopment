const setup = () => {

    let btnAanpassen = document.getElementById("btnAanpassen");
    btnAanpassen.addEventListener("click", pasTekstAan)

}

const pasTekstAan = () => {

    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML = "Welkom!";

}

window.addEventListener("load", setup);