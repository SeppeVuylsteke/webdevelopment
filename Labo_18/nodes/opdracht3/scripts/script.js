const setup = () => {
    document.querySelector("button").addEventListener("click", toevoegen);
}

const toevoegen = () => {
    const p = document.createElement("p");
    p.textContent = "Dit is een p-element";
    document.querySelector("#myDIV").appendChild(p);
}

window.addEventListener("load", setup);