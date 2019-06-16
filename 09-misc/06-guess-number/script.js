/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let nbr = Math.floor(Math.random()*100)+1;
    console.log(nbr);
    let essaie = 0;
    let indice = "";
    let proposition = -1;
    alert("Devine le nombre aléatoire entre 1 et 100 !");
    do{
        proposition = parseInt(prompt(indice + " \n Nombre ?"));
        essaie++;
        if(proposition == nbr){
            alert("Félicitation tu as trouvé le nombre en " + essaie + " essaie(s) !");
        }else if(proposition > nbr){
            indice = "Plus petit!";
        }else{
            indice = "Plus grand!";
        }
    }while(proposition != nbr);
})();
