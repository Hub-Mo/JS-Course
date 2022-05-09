// counter app training

let count = 0;

document.getElementById('increment-btn').addEventListener('click', increment);
let getElement = document.getElementById('display');

document.getElementById('save-btn').addEventListener('click', save)
let saveEl = document.getElementById('saved');

// incremening the count
function increment() {
    console.log("clicked") // to check if the eventlistener works.
    count += 1;
    getElement.innerHTML = count;
}

//saving the count
function save() {
    let theCount = count + " - ";
    saveEl.innerHTML += theCount;
    // reset counter by clicking the save button
    getElement.innerHTML = 0;
    count = 0;
}