/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person{
        constructor() {
            this.firstname = "firstname";
            this.lastname = "lastname";
        }
        get name(){
            return this.firstname + " " + this.lastname; 
        }
        set name(chaine){
            chaine = chaine.split(" ");
            this.firstname = chaine[0];
            this.lastname = chaine[1];
        }
    }
    document.getElementById("run").addEventListener("click", () =>{
        let perso = new Person();
        console.log(perso.name);
        perso.name = "Philippe Haerens";
        console.log(perso.name);
    });
})();
