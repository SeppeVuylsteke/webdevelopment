const setup = () => {
    const paragraaf = document.querySelectorAll('p');

    paragraaf[0].innerText = 'Goed gedaan!';
}
window.addEventListener("load", setup);