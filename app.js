// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');

const middleDropdown = document.getElementById('middle-dropdown');

const bottomDropdown = document.getElementById('bottom-dropdown');


const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('count');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

let top = 0;
let middle = 0;
let bottom = 0;

let catchphrases = [];


headDropdown.addEventListener('change', () => {
    headEl.style.backgroundImage = `url('./assets/${headDropdown.value}-head.png')`;
    top++;
    displayStats();
});
    

middleDropdown.addEventListener('change', () => {
    middleEl.style.backgroundImage = `url('./assets/${middleDropdown.value}-middle.png')`;
    middle++;
    displayStats();
});

bottomDropdown.addEventListener('change', () => { 
    bottomEl.style.backgroundImage = `url('./assets/${bottomDropdown.value}-pants.png')`;
    bottom++; 
    displayStats();
    
});


catchphraseButton.addEventListener('click', () => {
    catchphrases.push(catchphraseInput.value);
    displayCatchphrases();
});
    

    // clear out the form input's value so it's empty to the user
   
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)

function displayStats() {
    let total = (top + middle + bottom);
    reportEl.textContent = `You have changed the head ${top} times, and the middle ${middle} times and the ${bottom} for a total of ${total} changes`;
   
}

function displayCatchphrases() {
    const phraseList = document.getElementById('phraseList');
    phraseList.textContent = '';
    for (let phrase of catchphrases) {
        const li = document.createElement('li');
        li.textContent = phrase;
        phraseList.append(li);
    }}


    // clear out the DOM for the currently displayed catchphrases

    // loop through each catchphrase in state
   
    // and for each catchphrase
    
    // create an HTML element with the catchphrase as its text content
    
    // and append that HTML element to the cleared-out DOM