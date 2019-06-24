/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        //methode 1
        const fruitsNew = fruits.reduce((acc, item) => {
            if(!acc.includes(item))
                acc.push(item);
            return acc;
        }, []);
        console.log(fruitsNew);

        //methode 2
        const fruitsNew2 = Array.from(new Set(fruits));
        console.log(fruitsNew2)
    });
})();
