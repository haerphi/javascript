/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    //récupération du template
    const template = document.getElementById("tpl-hero");
    //récupération de target
    const target = document.getElementById("target");
    //récupération de l'input
    const input = document.getElementById("hero-id"); 

    //au click
    document.getElementById("run").addEventListener("click", () => {
        let find = false;
        fetch('http://localhost:3000/heroes/')
        .then((reponse) => {
            //transforme le résultat en objet JS
            reponse.json().then((temp) => {
                //boucle sur tout les élements
                temp.forEach((element) => {
                    if(element.id == input.value){
                        target.innerText = "";
                        //création d'un objet HTML avec le template
                        let temp = template.content.cloneNode(true);

                        //ajout des éléments nécéssaire dans l'objet temporaire
                        temp.querySelector('.name').innerText = element.name;
                        temp.querySelector('.alter-ego').innerText = element.alterEgo;
                        temp.querySelector('.powers').innerText = element.abilities;
                        
                        //écriture de l'objet temporaire dans l'HTML
                        target.appendChild(temp);
                        find = true;
                        return false;
                    }
                });
                if(!find){
                    target.innerText = "Aucun héro trouver :/"
                }
            });
        });
    });
})();