/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function again() {

    let age = prompt("what is your name?");
    let gender = prompt("what is your gender");
    let town = prompt("where do you live?");

    if (confirm(`is this correct ? ${age} ${gender} ${town}`) == true){

        alert("thank you");
    }
    else{
        again();
    }


})();
