/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function changeTarget(element){
        let temp = +element.innerText;
        temp += 1;
        if(temp > parseFloat(element.dataset.max)){
            element.innerText = element.dataset.min;
        }

        element.innerText = `${temp}`.padStart(2, "0"); /* s'il y a moin de 2elements, rajoute un 0*/

        document.getElementById("target").innerText = "+" + document.getElementById("part-one").innerText + document.getElementById("part-two").innerText + document.getElementById("part-three").innerText + document.getElementById("part-four").innerText
    }

    //Complet
    /*
    document.getElementById("part-one").addEventListener("click", () => {
        changeTarget(document.getElementById("part-one"));
    });
    document.getElementById("part-two").addEventListener("click", () => {
        changeTarget(document.getElementById("part-two"));
    });
    document.getElementById("part-three").addEventListener("click", () => {
        changeTarget(document.getElementById("part-three"));
    });
    document.getElementById("part-four").addEventListener("click", () => {
        changeTarget(document.getElementById("part-four"));
    });
    */
    //abreger
    let tab = ["one", "two", "three", "four"];
    tab.forEach(element => {
        document.getElementById("part-"+element).addEventListener("click", () => {
            changeTarget(document.getElementById("part-"+element));
            
        });
    });
})();
