const setup = () => {
    const redSlider = document.getElementById("red-slider");
    const greenSlider = document.getElementById("green-slider");
    const blueSlider = document.getElementById("blue-slider");

    const redValue = document.getElementById("red-value");
    const greenValue = document.getElementById("green-value");
    const blueValue = document.getElementById("blue-value");

    const colorBox = document.getElementById("color-box");

    const updateColor = () => {
        const r = redSlider.value;
        redValue.textContent = r;

        const g = greenSlider.value;
        greenValue.textContent = g;

        const b = blueSlider.value;
        blueValue.textContent = b;

        colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    };

    redSlider.addEventListener("input", updateColor);
    greenSlider.addEventListener("input", updateColor);
    blueSlider.addEventListener("input", updateColor);

    updateColor();
};

window.addEventListener("load", setup);
