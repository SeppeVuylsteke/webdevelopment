const setup = () => {
}
// prompt
let leeftijd = prompt('Hoe oud ben je?');

if (leeftijd !== null) {
    alert('Je bent ' + leeftijd + ' jaar oud!');
} else {
    alert('Er werd niets ingevoerd.');
}

// alert
alert('Dit is een waarschuwing');

// confirm
let result = confirm('Weet je zeker dat je wil doorgaan?');

if (result) {
    // ga door
} else {
    window.location.href = "../index.html";
}

window.addEventListener("load", setup);