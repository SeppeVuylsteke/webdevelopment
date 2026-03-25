const setup = () => {
    let gemeente = " ";
    let gemeenten = [];

    while (gemeente !== "stop") {
        gemeente = prompt("Geef een gemeente in").toLowerCase();

        if (gemeente !== "stop") {
            gemeenten.push(gemeente);
        }
    }

    const select = document.getElementById("gemeenten");

    gemeenten.forEach((item) => {
        const option = document.createElement("option");
        option.value = item;
        option.innerText = item;
        select.appendChild(option);

    })
}
window.addEventListener("load", setup);