/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const somme = (tab) =>{
        let total = 0;
        tab.forEach(element => {
            total += element;
        });
        return total;
    };

    document.getElementById("run").addEventListener("click", () =>{
        let numberTab = [];
        for(let i = 0; i < 10; i++){
            let numb = Math.floor(Math.random()*100)+1;
            numberTab.push(numb);
            document.getElementById("n-"+(i+1)).textContent = numb;
        }
        document.getElementById("min").textContent = Math.min(...numberTab);
        document.getElementById("max").textContent = Math.max(...numberTab);
        document.getElementById("sum").textContent = somme(numberTab);
        document.getElementById("average").textContent = somme(numberTab) / numberTab.length;

    });
})();
