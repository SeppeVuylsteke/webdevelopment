const setup = () => {
    document.querySelectorAll('li').forEach(item => {
        item.setAttribute('class', 'listitem');
    })

    const style = document.createElement("style");
    style.innerText = ".listitem { color: red;}"
    document.head.appendChild(style);

    const body = document.querySelector("body");
    const img = document.createElement("img");


}
window.addEventListener("load", setup);