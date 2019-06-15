/* becode/javascript
 *
 * /08-dom/02-select-two/script.js - 8.2: sélection par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let pTags = document.getElementsByTagName("p");
    console.log(pTags);
    for(let i = 0; i < pTags.length; i++){
        if(pTags[i].className == "target"){
            pTags[i].textContent = "owned";
        }
    }
})();
