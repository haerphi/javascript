/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        let element1 = parseInt(document.getElementById("op-one").value);
        let element2 = parseInt(document.getElementById("op-two").value);
        switch(operation){
            case "addition":
                alert(element1+element2);
                break;
            case "substraction":
                alert(element1-element2);
                break;
            case "multiplication":
                alert(element1*element2);
                break;
            case "division":
                if(element2 != 0) 
                    alert(element1/element2);
                else{
                    alert("L'opérande deux ne peut être égale à 0 pour une division");
                }
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
