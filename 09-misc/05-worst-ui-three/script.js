/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    //methode 1
    function changeTarget(element){
        let temp = parseInt(element.value)+1;
        if(temp > parseInt(element.dataset.max)){
            element.value = element.dataset.min;
        }else{
            element.value = temp;
            if(element.value.length == 1){
                element.value = "0"+element.value;
            }
        }
        document.getElementById("target").textContent = "+" + document.getElementById("part-one").value + document.getElementById("part-two").value + document.getElementById("part-three").value + document.getElementById("part-four").value
    }

    function allTarget(idTab){
        idTab.forEach(element => {
            if(element.defilement)
                changeTarget(document.getElementById(element.name));
        });
        setTimeout(function(){
            allTarget(idTab);
        }, 100);
    }
    
    let idTab = [
        {
            name:"part-one",
            defilement : true
        },
        {
            name:"part-two",
            defilement : true
        },
        {
            name:"part-three",
            defilement : true
        },
        {
            name:"part-four",
            defilement : true
    }];

    idTab.forEach(element => {
        document.getElementById("fix-"+element.name).addEventListener("click", () =>{
            if(element.defilement){
                element.defilement = false;
            }else{
                element.defilement = true;
            }
        });
    });

    setTimeout(function(){
        allTarget(idTab);
    }, 100);
})();
