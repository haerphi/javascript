/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const factorial = (entier) =>{
        if(entier > 1)
            return entier * factorial(entier-1);
        else
            return 1;
    }
    document.getElementById("run").addEventListener("click", () => {
        // your code here
        let number = parseInt(document.getElementById("number").value);
        alert(factorial(number));
    });
})();
