const setup = () => {

    const buttons = document.getElementsByTagName("button");

    const buttonsArray = Array.from(buttons);

    for (let i = 0; i < buttonsArray.length; i++) {
        const button = buttonsArray[i];
        button.addEventListener("click", function() {
            button.classList.toggle("isingedrukt");
        });
    }
};

window.addEventListener("load", setup);


