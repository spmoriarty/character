// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');

const middleDropdown = document.getElementById('middle-dropdown');

const bottomDropdown = document.getElementById('bottom-dropdown');


const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('count');
const catchphrasesEl = document.getElementById('catchphrases');
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
    console.log('Changing the head to', `${headDropdown.value}-head`); 
});
    

middleDropdown.addEventListener('change', () => {
    middleEl.style.backgroundImage = `url('./assets/${middleDropdown.value}-middle.png')`;
    middle++;
    displayStats();
    console.log('Changing the middle to', `${middleDropdown.value}-middle`);
});

bottomDropdown.addEventListener('change', () => { 
    bottomEl.style.backgroundImage = `url('./assets/${bottomDropdown.value}-pants.png')`;
    bottom++; 
    displayStats();
    console.log('Changing the pants to', `${bottomDropdown.value}`);
    
});


catchphraseButton.addEventListener('click', () => {
    catchphrases.push(catchphraseInput.value);
    console.log(catchphraseInput.value);
    console.log(`Changed Phrase to ${catchphrases}`);
    displayCatchphrases();
});
    

    // clear out the form input's value so it's empty to the user
   
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)

function displayStats() {
    let total = (top + middle + bottom);
    reportEl.textContent = `You have changed the head ${top} times, and the middle ${middle} times and the ${bottom} for a total of ${total} changes`;
    console.log('Stats changed');
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