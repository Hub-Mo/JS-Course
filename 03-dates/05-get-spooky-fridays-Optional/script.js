/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    let inputYear = new Date(document.getElementById('year').value);
    let y = inputYear.getFullYear();
    let btn = document.getElementById('run');
    btn.addEventListener('click', log);


    function log(){
        console.log(y);
    }

    // function fri13(){
    //     for (let month = 0; month < 11; month++){
    //         let d = new Date(inputYear){

    //         }
    //     }
    // }










    // for(let year=1995; year <=2022; year++){
    //     for (let month=0;month<11;month++){
          
            
    //       let thirteen=new Date(year,month,13);
    //       if(thirteen.getDay()==5 ){
    //         var arr=['January','February','March','April','May','Jun','July','August','September','October','November','December'];
    //     document.write('Friday 13 is on '+arr[month]+ ' '+ year + "<br>" );
    //       }
    //        }
    //     }

})();
