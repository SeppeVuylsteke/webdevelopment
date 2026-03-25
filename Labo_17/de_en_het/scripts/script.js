const setup = () => {
let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
// let zin = "de man riep de";
 let output= "";
zin = zin.toLowerCase();


 for (let i = 0; i < zin.length; i++) {
     if (zin.substring(i, i+2) === "de" && zin.charAt(i-1) === "" && zin.charAt(i+2) === " " || zin.substring(i, i+2) === "de" && zin.charAt(i+2) === "" && zin.charAt(i-1) === " ") {
         output += "het";
         i += 2;
     } else if (zin.substring(i, i+4) === " de ") {
         output += " het ";
         i += 4;
     }
     output += zin.charAt(i);
 }
 console.log(output)
}
window.addEventListener("load", setup);