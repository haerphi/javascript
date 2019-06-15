/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function createTableMultiple(row, column){
        let table = "<table border='1'>";
        for(let iRow = 0; iRow < row; iRow++){
            table += "<tr>";
            for(let iColumn = 0; iColumn < column; iColumn++){
                table += "<td>" + ((iColumn+1) * (iRow+1)) + "</td>";
            }
            table += "</tr>";
        }

        table += "</table>";
        return table;
    }

    document.getElementById("target").innerHTML = createTableMultiple(10, 10);
})();
