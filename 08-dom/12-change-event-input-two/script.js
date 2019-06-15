/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    /* exemple de regex */
    function validateEmail(email) {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
    function valideInput(chaine){
        let regex1 = /^[a-zA-Z0-9]{8,}$/;
        
        let regex2 = /^.*[0-9].*[0-9].*$/;

        return regex1.test(chaine) && regex2.test(chaine);


    }

    password = document.getElementById("pass-one");
    password.addEventListener("input", () =>{
        if(valideInput(password.value)){
            document.getElementById("validity").textContent = "Ok";
        }else{
            document.getElementById("validity").textContent = "Pas ok";
        }
    });

})();
