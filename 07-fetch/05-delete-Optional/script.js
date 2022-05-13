/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById('run').addEventListener('click', GoGo);

    async function GoGo() {
        let apiData = await fetch('http://localhost:3000/heroes')
        let apiJson = await apiData.json();
        console.log(apiJson);

        let heroArray = [...apiJson]
        console.log(heroArray);

        let inputId = document.getElementById('hero-id').value;

        heroArray.forEach(item => {
            if (item.id == inputId){
                let index = heroArray.findIndex((obj)=> obj === item);
                heroArray.splice(index,1);
                console.log(heroArray);
            }
        })


    }

})();
