/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function changeTarget(element){
        let temp = parseInt(element.innerText);
        temp += 1;
        if(temp > parseInt(element.dataset.max)){
            element.textContent = element.dataset.min;
        }else{
            element.textContent = temp;
            if(element.innerText.length == 1){
                element.textContent = "0"+element.innerText;
            }
        }
        document.getElementById("target").textContent = "+" + document.getElementById("part-one").innerText + document.getElementById("part-two").innerText + document.getElementById("part-three").innerText + document.getElementById("part-four").innerText
    }


    document.getElementById("part-one").addEventListener("click", () => {
        changeTarget(document.getElementById("part-one"));
    });
    document.getElementById("part-two").addEventListener("click", () => {
        changeTarget(document.getElementById("part-two"));
    });
    document.getElementById("part-three").addEventListener("click", () => {
        changeTarget(document.getElementById("part-three"));
    });
    document.getElementById("part-four").addEventListener("click", () => {
        changeTarget(document.getElementById("part-four"));
    });
})();
