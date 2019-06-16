/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let i = 0;
    if(localStorage.getItem("compteurLocal") != null){
        i = parseInt(localStorage.getItem("compteurLocal"));
    }
    document.getElementById("target").textContent = i;
    
    document.getElementById("increment").addEventListener("click", () => {
        if(localStorage.getItem("compteurLocal") != null){
           console.log("nop");
        }
        i ++;
        document.getElementById("target").textContent = i;
        localStorage.setItem("compteurLocal", ""+i);
    });
})();
