/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function changeImg(img){
        //est-ce que l'img possède l'élement hover ?
        if(img.dataset.hover != null){
            //savegarde de la valeur src pour ne pas la perdre
            let temp = img.src;
            //replacement du src par hover
            img.src = img.dataset.hover;
            //sauvegarde du src dans l'hover
            img.dataset.hover = temp;
        }
    }

    //récupération de l'image + ajout de l'event "mouseover"
    Array.from(document.querySelectorAll("img")).forEach($btn =>
        $btn.addEventListener(
            "mouseover",
            () => (changeImg($btn), false),
        ),
    );
    //récupération de l'image + ajout de l'event "mouse out"
    //optimiser ?
    Array.from(document.querySelectorAll("img")).forEach($btn =>
        $btn.addEventListener(
            "mouseout",
            () => (changeImg($btn), false),
        ),
    );
})();
