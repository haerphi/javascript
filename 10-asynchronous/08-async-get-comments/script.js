/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        //créer une fontion async pour récupérer les commentaires
        async function coms(element) {
            //récuparation des commentaires
            let commentsTab = await window.lib.getComments(element.id);
            //attribution des commentaires
            element.comments = commentsTab;
        }
        
        //créer une fontion async pour récupérer les posts
        async function posts() {
            //Récupération des posts
            let result = await window.lib.getPosts();
            //boucle sur tout les posts pour ajouter les commentaires
            result.forEach(element => {
                coms(element);
                console.log(element);
            });
        }
        posts();
    });
})();