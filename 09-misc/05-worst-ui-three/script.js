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
    function add1ToValueOfId(id){
        let target = document.getElementById(id);
        let temp = parseInt(target.value)+1;
        if((temp+"").length == 1){
            target.textContent = "0"+ temp;
        }else{
            target.textContent = temp;
        }
    }

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

        let stop1 = document.getElementById("fix-part-one");
        stop1.addEventListener("click", () =>{
           idTab.forEach((element) => {
               if(element.name == "part-one"){
                   element.defilement = false;
                   return false;
               }
           }); 
        });

        let stop2 = document.getElementById("fix-part-two");
        stop2.addEventListener("click", () =>{
           idTab.forEach((element) => {
               if(element.name == "part-two"){
                   element.defilement = false;
                   return false;
               }
           }); 
        });

        let stop3 = document.getElementById("fix-part-three");
        stop3.addEventListener("click", () =>{
           idTab.forEach((element) => {
               if(element.name == "part-three"){
                   element.defilement = false;
                   return false;
               }
           }); 
        });

        let stop4 = document.getElementById("fix-part-four");
        stop4.addEventListener("click", () =>{
           idTab.forEach((element) => {
               if(element.name == "part-four"){
                   element.defilement = false;
                   return false;
               }
           }); 
        });

    setTimeout(function(){
        allTarget(idTab);
    }, 100);
})();
