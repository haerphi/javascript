/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        let element1 = parseInt(document.getElementById("op-one").value);
        let element2 = parseInt(document.getElementById("op-two").value);
        alert(element1+element2);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        let element1 = parseInt(document.getElementById("op-one").value);
        let element2 = parseInt(document.getElementById("op-two").value);
        alert(element1-element2);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        let element1 = parseInt(document.getElementById("op-one").value);
        let element2 = parseInt(document.getElementById("op-two").value);
        alert(element1*element2);
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        let element1 = parseInt(document.getElementById("op-one").value);
        let element2 = parseInt(document.getElementById("op-two").value);
        if(element2 != 0) 
            alert(element1/element2);
        else{
            alert("L'opérande deux ne peut être égale à 0 pour une division");
        }
    });
})();
