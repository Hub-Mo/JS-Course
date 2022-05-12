/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// On the click to the button, get the birthdate of the visitor and display his/her age.
{/* <select name="dob-day" id="dob-day"></select> */}
{/* <select name="dob-month" id="dob-month"> */}
{/* <select name="dob-year" id="dob-year"> */}
{/* <button type="button" id="run">Run the script</button> */}



(function() {


    
    let btn = document.getElementById('run');
    btn.addEventListener('click', age);

    function age(){
    let inputDay = document.getElementById('dob-day').value;
    let inputMonth = document.getElementById('dob-month').value;
    let inputYear = document.getElementById('dob-year').value;

    const date = new Date();
    
    let dayNow = date.getDate();
    let monthNow = 1 + date.getMonth();
    let yearNow = date.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (inputDay > dayNow){
        dayNow = dayNow + month[monthNow - 1];
        monthNow = monthNow - 1;
    }
    if (inputMonth > monthNow){
        monthNow = monthNow + 12;
        yearNow = yearNow - 1;
    }
    let d = dayNow - inputDay;
    let m = monthNow - inputMonth;
    let y = yearNow - inputYear;

    alert("your age is "+y+" years "+m+" months and "+d+" days");
}

})();
