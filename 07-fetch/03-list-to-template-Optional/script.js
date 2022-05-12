/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click', magic)

    async function magic() {

        const Data = await fetch('../../_shared/api.json')
        const dataContent = await Data.json();

        let target = document.getElementById('target');
        dataContent.heroes.forEach(item => {
            let l1 = document.createElement('li');
                let h4 = document.createElement('h4');
                let pTag = document.createElement('p');
                let em = document.createElement('em');
                target.append(l1);
                target.append(pTag);
                l1.append(h4);
                l1.append(em);
                h4.innerHTML = item.name;
                pTag.innerHTML = item.abilities;
                em.innerHTML = item.alterEgo;
        })
        

    }
})();
