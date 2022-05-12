/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {




    var performOperation = function(operation) {
        let answer = 0;
        let opOne = parseInt(document.getElementById("op-one").value);
        let opTwo = parseInt(document.getElementById('op-two').value);
        switch (operation){
            case "addition":
                answer = (opOne + opTwo);
                alert(answer);
                break;
                case "substraction":
                    answer = (opOne - opTwo);
                    alert(answer);
                    break;
                    case "multiplication":
                        answer = (opOne * opTwo);
                        alert(answer);
                        break;
                        case "division":
                            answer = (opOne / opTwo);
                            alert(answer);
                            break;
        }



    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
