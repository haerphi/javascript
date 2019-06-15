/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    //methode 1 - supprimer le caractère 11eme caractère lorsqu'il est encodé
    function checkInputWithoutMaxlength(id, limit){
        //est-ce que id.value à moin de caractère que la limite ?
        if(id.value.length > limit){
            //si oui, enleve le dernier caractère
            id.value = id.value.substring(0, id.value.length-1);
        }
    }

    password = document.getElementById("pass-one");

    //methode 2 - ajouter l'attribut "maxlength" dans l'input
    password.setAttribute("maxlength", 10);

    password.addEventListener("input", () =>{
        //appel pour la methode 1
        checkInputWithoutMaxlength(password, 10);

        //mise à jour du compteur de caractère
        document.getElementById("counter").textContent = password.value.length + "/10";
    });
})();
