/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let in1 = document.getElementById('pass-one');
    let in2 = document.getElementById('pass-two');
    let inp1 = document.getElementById('pass-one');
    let inp2 = document.getElementById('pass-two');
    document.getElementById('run').addEventListener('click', () => {

    if (in1.value === in2.value) {
    inp1.style.borderColor = "green";
    inp2.style.borderColor = "green";
    }
    else {
        inp1.style.borderColor = "red";
        inp2.style.borderColor = "red";
    }
})


})();
