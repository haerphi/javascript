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
        async function coms(element, postId) {
        let table = await window.lib.getComments(postId);
            element.comments = table;
        }
        
        async function posts() {
            let result = await window.lib.getPosts();
            result.forEach(element => {
                coms(element, element.id);
                console.log(element);
            });
        }
        posts();
    });
})();