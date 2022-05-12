/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


const d = new Date();
let day = d.getDate();
let month = d.getMonth() + 1;
const year = d.getFullYear();
const hour = d.getHours();
const minut = d.getMinutes();


if (month == 1){
    month = "January"
}
else if (month == 2){
    month = "February"
}
else if (month == 3){
    month = "March"
}
else if (month == 4){
    month = "april"
}
else if (month == 5){
    month = "May"
}
else if (month == 6){
    month = "June"
}
else if (month == 7){
    month = "July"
}
else if (month == 8){
    month = "August"
}
else if (month == 9){
    month = "Septamber"
}
else if (month == 10){
    month = "October"
}
else if (month == 11){
    month = "November"
}
else if(month == 12) {
    month = "December"
}
else {
    alert("wrong month");
}

function getDayName(day, locale){
    let dn = new Date(day);
    return dn.toLocaleDateString(locale, { weekday: 'long'})
}
let dayName = getDayName(day, "en-US");

document.getElementById('target').innerHTML = `${`${dayName} ${day} ${month} ${year} ${hour}`}h${minut}`;

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

})();
