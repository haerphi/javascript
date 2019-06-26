/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts((error, articles) => {
            console.log(articles);
            articles.forEach(element => {
                window.lib.getComments(element.id, (error, tabComment) => {
                    element.comments = tabComment;
                });
            });
            setTimeout(() => {console.log(articles)}, 2000);
        });
    });
})();
