/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

document.getElementById("red").onclick = colorRed
document.getElementById("green").onclick = colorGreen
document.getElementById("yellow").onclick = colorYellow
document.getElementById("blue").onclick = colorBlue


function colorRed(){
    document.querySelector('body').style.backgroundColor = 'red'
}
function colorGreen(){
    document.querySelector('body').style.backgroundColor = 'green'
}
function colorYellow(){
    document.querySelector('body').style.backgroundColor = 'yellow'
}
function colorBlue(){
    document.querySelector('body').style.backgroundColor = 'blue'
}



})();
