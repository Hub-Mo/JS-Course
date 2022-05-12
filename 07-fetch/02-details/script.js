/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById('run').addEventListener('click', getHeroId);

    async function getHeroId() {


        // making api call request adn getting response back
        const response = await fetch("/_shared/api.json");

        // parsing it into json format
        const data = await response.json();

        const heroes = data.heroes;
        console.log(heroes)

        // getting the id
        let idInput = document.getElementById('hero-id').value;
        let target = document.getElementById('target');

        data.heroes.forEach(hero => {
            if (hero.id == idInput) {
                target.innerHTML = hero.name
            }
        })
    }

})();
