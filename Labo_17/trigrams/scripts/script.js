const setup = () => {

    let woord= "onoorbaar";
    let output ="";

    for (let i = 0; i < woord.length-2; i++) {
        output += woord.charAt(i) + woord.charAt(i+1) + woord.charAt(i+2) + " - ";
    }
    output = output.slice(0, output.length-2);
    output = output.trim();
    console.log(output);
}
window.addEventListener("load", setup);