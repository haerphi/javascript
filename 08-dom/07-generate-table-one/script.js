/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function createTable(row, column){
        let table = "<table border='1'>";
        for(let iRow = 0; iRow < row; iRow++){
            table += "<tr>";
            for(let iColumn = 0; iColumn < column; iColumn++){
                table += "<td>" + iColumn + " ; " + iRow + "</td>";
            }
            table += "</tr>";
        }

        table += "</table>";
        return table;
    }

    function creeTableau(id, ligne, colonne){
        let tableau = document.getElementById(id);
        for(iLigne = 0; iLigne < ligne; iLigne++){
        let nouvelle = tableau.insertRow(-1);
        
            for(iColonne = 0; iColonne < colonne; iColonne++){
                let cellule = nouvelle.insertCell(-1);
                cellule.textContent = iColonne + " ; " + iLigne;
            }
        }
    }
    document.getElementById("target").innerHTML =" <table id='tableauId' border='1'> </table>";
    creeTableau("tableauId", 10, 1);

    //document.getElementById("target").innerHTML = createTable(10, 10);
})();
