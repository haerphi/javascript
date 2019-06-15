/* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    // your code here
    document.getElementById("run").addEventListener("click", () =>{
        //récupération de toute propriété de l'objet defaultProps
        defaultPropsName = Object.getOwnPropertyNames(defaultProps);
        //parcours de tout les objets de computers
        computers.forEach(element => {
            //parcours de toutes les propriété de default props
            defaultPropsName.forEach(prop => {
                //est-ce que l'ordinateur a déjà la propriété ?
                if(element[prop] == null){
                    //si elle n'existe pas, on l'ajoute
                    element[prop] = defaultProps[prop];
                }
            });
        });

        console.log(computers);
    });
})();
