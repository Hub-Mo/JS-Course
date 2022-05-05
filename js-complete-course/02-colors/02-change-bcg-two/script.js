/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const inputColor = document.getElementById('color');
    const runbutton = document.getElementById('run');
    runbutton.addEventListener('click', changeColor);

// document.getElementById('run')
function changeColor(){
    // document.querySelector('body').style.backgroundColor = inputColor
    const valueInput = inputColor.value;
    document.body.style.backgroundColor = valueInput;
}




})();
