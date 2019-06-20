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
/*
    //animation
    function changeSize(first, numb = 0){
        let spanTab = document.getElementsByClassName("vague");
        for(let i = 0; i < spanTab.length; i++){
            if(first){
                spanTab[i].dataset.decrease = "false";
            }

            let size = parseInt(spanTab[i].style.fontSize.substring(0, spanTab[i].style.fontSize.length-1));
            if(i == 0)
                console.log("A " + size);
            if(i == 1)
            console.log("B " + size);
            

            if(spanTab[i].dataset.decrease == "true"){
                size -= diffSize;
                if(size <= minSize){
                    spanTab[i].dataset.decrease = "false";
                }

            }else{
                size += diffSize;
                if(size >= maxSize){
                    spanTab[i].dataset.decrease = "true";
                }
            }
            spanTab[i].style.fontSize = size + "px";
            
        }
        if(numb < 12)
            setTimeout(() => changeSize(false, numb+1), 1000);
    }

    changeSize(true);
    */
    
})();
