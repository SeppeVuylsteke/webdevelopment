/* const setup = () => {
    let postcode = document.getElementById('postcode');


    let submitKnop = document.querySelector("button");
    submitKnop.addEventListener("click", (e) => {
        e.preventDefault();
        postcode = parseInt(postcode.value);
        checkValid(postcode);
    });




    const checkValid = (getal) => {
        if (getal >= 1000 && getal <= 9992) {
            return true;
        } else {
            alert(`Geef een geldige postcode in`);
            return false;
        }
    }



}
window.addEventListener("load", setup); */