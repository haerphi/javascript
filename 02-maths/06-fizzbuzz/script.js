/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {

    // your code here

    for(let i = 1; i <= 100; i++){
        //Methode1
        if(i % 3 == 0 && i % 5 == 0)
            console.log(i + " - fizzbuzz");
        else if (i % 3 == 0)
            console.log(i + " - fizz");
        else if (i % 5 == 0)
            console.log(i + " - buzz");
        else
            console.log(i);

        /*
        let msg = "";
        if(i % 3 === 0){
            msg += "Fizz";
        }
        if(i % 5 === 0){
            msg += "Buzz";
        }
        if(msg === ""){
            msg = x;
        }
        console.log(msg);
        */

    }
})();
