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
    function addCharacter(tab, espace = false){
        
        let target = document.getElementById("target");
        let final = target.innerText;
        if(espace){
            final += " " + tab[0];
            espace = false;
        }else if(tab[0] == " "){
            espace = true;
        }else{
            final += tab[0];
        }

        tab = tab.substring(1, tab.length);
        target.innerHTML = final;
        if(tab.length > 0){
            setTimeout(function() {
                addCharacter(tab, espace);
              }, Math.floor(Math.random() * (1000 - 100 + 1)) + 300);
        }
    }

    let target = document.getElementById("target");
    let targetTab = target.innerText;
    target.textContent = "";

    setTimeout(function() {
        addCharacter(targetTab);
      }, 500);
})();
