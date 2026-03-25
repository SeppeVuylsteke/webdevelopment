const setup = () => {
    document.querySelectorAll('li').forEach(item => {
        item.setAttribute('class', 'listitem');
    })

    const style = document.createElement("style");
    style.innerText = ".listitem { color: red;}"
    document.head.appendChild(style);

    const body = document.querySelector("body");
    const img = document.createElement("img");

    img.setAttribute("src", "images/vives.png");
    img.setAttribute("alt","Logo Vives");
    img.setAttribute("style", "width: 100px;")
    body.appendChild(img);
}
window.addEventListener("load", setup);