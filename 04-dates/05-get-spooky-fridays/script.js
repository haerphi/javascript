/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () =>{
        let year = parseInt(document.getElementById("year").value);
        let friday13 = [];
        for(let month = 1; month <= 12; month++){
            let date = new Date(year, month, 13);
            if(date.getDay() == 5){
                friday13.push(date);
            }
        }
        alert(friday13);


        let lst = new Array();
        console.log(lst);
        lst = 9;
        lest = 8;
        console.log(lst);
        
    })
})();
