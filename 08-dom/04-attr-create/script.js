/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    //récupération de data-image
    let data = document.getElementById("source").dataset.image;
    document.getElementById("target").innerHTML = `<img src='${data}' alt='image aléatoire du chaton'>`;
    let del = document.getElementById("source");
    let parent = document.querySelector(".material");
    parent.removeChild(del);
})();
