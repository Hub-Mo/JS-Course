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

        // getting the id
        let idInput = parseInt(document.getElementById('hero-id').value);
        let target = document.getElementById('target');

        data.heroes.forEach(hero => {
            if (hero.id == idInput) {
                let l1 = document.createElement('li');
                let h4 = document.createElement('h4')
                let pTag = document.createElement('p');
                let em = document.createElement('em')
                target.append(l1);
                target.append(pTag);
                l1.append(h4);
                l1.append(em);
                h4.innerHTML = hero.name;
                pTag.innerHTML = hero.abilities;
                em.innerHTML = hero.alterEgo;
            }
        })
    }

})();
