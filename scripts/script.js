const semester1 = document.querySelectorAll(".semester1");
const semester2 = document.querySelectorAll(".semester2");

semester2.forEach(el => el.style.display = "none");

const showHideUpcomingEvents = () => {
    semester1.forEach(el => el.style.display = "block");
    semester2.forEach(el => el.style.display = "none");
}

const showHidePassedEvents = () => {
    semester1.forEach(el => el.style.display = "none");
    semester2.forEach(el => el.style.display = "block");
}

const showHideAllEvents = () => {
    semester1.forEach(el => el.style.display = "block");
    semester2.forEach(el => el.style.display = "block");
}
