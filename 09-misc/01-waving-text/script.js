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
    //Basic
    let target = document.getElementById("target");
    let targetTab = target.innerText.split("");
    let final = "";
    let i = 0;
    let decrease = false;
    let diffSize = 5;
    let basicSize = 10;
    let maxSize = 40;
    let minSize = basicSize;

    targetTab.forEach(element => {
        final += "<span class='vague' style='font-size:" + (basicSize + i) + "px'>";
        final += element;
        final += "</span>";
        if((basicSize + i) <= maxSize && decrease == false){
            i += diffSize;
        }else if((basicSize + i) > minSize && decrease == true){
            i -= diffSize;
        }
        if((basicSize + i) <= minSize){
            decrease = false;
        }else if((basicSize + i) >= maxSize){
            decrease = true;
        }
    });
    target.innerHTML = final;

    //animation
    function changeSize(first){
        let spanTab = document.getElementsByClassName("vague");
        for(let i = spanTab.length-1; i > 0; i--){
            if(first){
                spanTab[i].dataset.decrease = false; //pour la première fois que l'animation est lancée
            }
            let size = parseInt(spanTab[i].style.fontSize.substring(0, spanTab[i].style.fontSize.length-2));
            if(size <= minSize && spanTab[i].dataset.decrease == "true"){ // vérifie si la taille actuel ne dépasse pas la taille max
                spanTab[i].dataset.decrease = "false";
            }else if(size >= maxSize && spanTab[i].dataset.decrease == "false"){ // vérifie si la taille actuel ne dépasse pas la taille minimal
                spanTab[i].dataset.decrease = "true";
            }
            console.log(spanTab[i].dataset.decrease);

            if(spanTab[i].dataset.decrease == "true"){ //modification de la taille
                console.log(size + " - => " + (size-diffSize)+"px");
                spanTab[i].style.fontSize = (size-diffSize)+"px";
            }else{
                console.log(size + " + => " + (size+diffSize)+"px");
                spanTab[i].style.fontSize = (size+diffSize)+"px";
            }
        }
            //setTimeout(() => changeSize(false), 1000);
    }

    //changeSize(true);
    
})();
