/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        // your code here
        let chaine = document.getElementById("numbers").value;
        let tabNumber = chaine.split(',');
        for(let i = 0; i < tabNumber.length; i++){
            tabNumber[i] = parseInt(tabNumber[i]);
        }

        tabNumber.sort((a, b) => (a - b));
        alert(tabNumber);
    });
})();
