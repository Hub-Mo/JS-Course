/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById('run').addEventListener('click', Go);

    async function Go() {
        let api = await fetch("../../_shared/api.json")
        let apiArray = await api.json();
        let xmen = apiArray.heroes;

        //form input
        let hName = document.getElementById('hero-name').value;
        let hAlterEgo = document.getElementById('hero-alter-ego').value;
        let hPower = document.getElementById('hero-powers').value;
        // hName.setAttribute('required',''); this doesnt work, dk why tho. trying the if statement.





        //making an array out of the json file.
        // let xmenArray = Object.entries(xmen);
        let xmenArray = [...xmen];

        //giving new hero the right id number
        let hId = xmenArray.length + 1;


        //making an object of the user input.
        let hero = {
            id: hId,
            name: hName,
            alterego: hAlterEgo,
            powers: [hPower]
        }

        //pushing object into the xmenArray
        xmenArray.push(hero);


        //making input fields required
        if (hName === '' || hAlterEgo === '' || hPower === '') {
            alert('the input fields are all requiredd!!')
        }
        else {        
            console.log(xmenArray);
        }

        
    }

})();
