/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    //récupération du template
    let template = document.getElementById("tpl-hero");
    //récupération de target
    let target = document.getElementById("target");
    //au click
    document.getElementById("run").addEventListener("click", () => {
        //récupération des données
        fetch('http://localhost:3000/heroes/')
        .then((reponse) => {
            //transforme le résultat en objet JS
            reponse.json().then((temp) => {
                //boucle sur tout les élements
                temp.forEach(element => {
                    //création d'un objet HTML avec le template
                    let temp = template.content.cloneNode(true);

                    //ajout des éléments nécéssaire dans l'objet temporaire
                    temp.querySelector('.name').innerText = element.name;
                    temp.querySelector('.alter-ego').innerText = element.alterEgo;
                    temp.querySelector('.powers').innerText = element.abilities;
                    
                    //écriture de l'objet temporaire dans l'HTML
                    target.appendChild(temp);

                });
            });
        });
    });
})();
