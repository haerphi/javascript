/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function addCharacter(){
        //récupération du texte déjà (re-)écris
        let target = document.getElementById("target");
        let final = target.innerText;
        //est-ce qu'il faut rajouter un espace ? Cette condition n'a pas de sens à la première itération
        if(espace){
            final += " ";
            espace = false;
        }
        //Si le caractère actuel est un espace, espace = true donc prochaine itération on rajoute un espace
        if(tab[0] === " "){
            espace = true;
        }
        //rajout du caractère actuel
        final += tab[0];
        //écriture de la nouvelle "partie" du texte
        target.innerHTML = final;
        //on retire le caractère que l'on vient d'écrire de la chaine.
        tab = tab.substring(1, tab.length);
        //s'il n'y a plus de caractère à afficher, on arrête la "boucle"
        if(tab.length <= 0){
            console.log("yep");
            clearInterval(interval);
        }
    }

    let target = document.getElementById("target");
    var tab = target.innerText;
    target.textContent = "";
    var espace = false;
    var interval = setInterval(() => addCharacter(), 500);


})();
