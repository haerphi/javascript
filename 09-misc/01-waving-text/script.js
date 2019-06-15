/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let target = document.getElementById("target");
    let targetTab = target.innerText.split("");
    let final = "";
    let i = 0;
    let decrease = false;
    targetTab.forEach(element => {
        final += "<span style='font-size:" + (10 + i) + "px'>";
        final += element;
        final += "</span>";
        if(i <= 12 && decrease == false){
            i += 2;
        }else if(i > 0 && decrease == true){
            i -= 2;
        }
        if(i <= 0){
            decrease = false;
        }else if(i >= 12){
            decrease = true;
        }
    });
    target.innerHTML = final;
    
})();
