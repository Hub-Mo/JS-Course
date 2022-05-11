/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let password = document.getElementById('pass-one');
    let counter = document.getElementById('counter');
    password.setAttribute('maxLength','10');
    console.log(password);

    password.addEventListener('input', () => {
        let passLength = password.value.length;
        counter.innerHTML = passLength + '/10';
    })

})();
