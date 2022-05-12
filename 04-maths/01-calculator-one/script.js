/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    document.getElementById("addition").addEventListener("click", function() {
        let opOne = parseInt(document.getElementById("op-one").value);
        let opTwo = parseInt(document.getElementById('op-two').value);

        let addR = opOne + opTwo;
        alert(addR);

    });

    document.getElementById("substraction").addEventListener("click", function() {
        let opOne = parseInt(document.getElementById("op-one").value);
        let opTwo = parseInt(document.getElementById('op-two').value);

        let addR = opOne - opTwo;
        alert(addR);    });

    document.getElementById("multiplication").addEventListener("click", function() {
        let opOne = parseInt(document.getElementById("op-one").value);
        let opTwo = parseInt(document.getElementById('op-two').value);

        let addR = opOne * opTwo;
        alert(addR);    });

    document.getElementById("division").addEventListener("click", function() {
        let opOne = parseInt(document.getElementById("op-one").value);
        let opTwo = parseInt(document.getElementById('op-two').value);

        let addR = opOne / opTwo;
        alert(addR);    });
})();
