/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    function randomWithMaxExclude(max){
        return Math.floor(Math.random() * max)
    }
    document.getElementById("run").addEventListener("click", () =>{
        let determinant = "Le ";
        //récupération de l'oiseau
        let bird = birds[randomWithMaxExclude(birds.length)];
        //récupération de l'adjectif
        let adjectif = [...adjectives][randomWithMaxExclude(adjectives.size)];
        //est-ce que l'oiseau est au féminin ?
        if(bird.fem){
            determinant = "La ";
            adjectif += "e";
        }

        document.getElementById("target").textContent = determinant + bird.name + " " + adjectif;
    });

})();
