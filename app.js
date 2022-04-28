// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');

const middleDropdown = document.getElementById('middle-dropdown');

const bottomDropdown = document.getElementById('bottom-dropdown');


const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('changes');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

let top = 0;
let middle = 0;
let bottom = 0;
let catchphrases = [];

// set state for how many times the user changes the head, middle, and bottom
// set state for all of the character's catchphrases

headDropdown.addEventListener('change', () => {
    headEl.style.backgroundImage = `url('./assets/${headDropdown.value}-head.png')`;
    top++;
    displayStats ();
    console.log('Changing the head to', `${headDropdown.value}-head`);
    
});
    
    // increment the head change count state

    // update the stats to show the new count (call displayStats() to do this work)



middleDropdown.addEventListener('change', () => {
    middleEl.style.backgroundImage = `url('./assets/${middleDropdown.value}-middle.png')`;
    middle++;
    console.log('Changing the middle to', `${middleDropdown.value}-middle`);
    displayStats = (middle.value);
    // increment the middle change count state
    
    // update the stats to show the new count (call displayStats() to do this work)
});

bottomDropdown.addEventListener('change', () => { 
    bottomEl.style.backgroundImage = `url('./assets/${bottomDropdown.value}-pants.png')`;
    bottom++;
    displayStats = (bottom.value); 
    console.log('Changing the pants to', `${bottomDropdown.value}`);
    
    // get the value of the bottom dropdown

    // increment the bottom change count state
    

    // update the stats to show the new count (call displayStats() to do this work)
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    
    // push the new catchphrase to the catchphrase array in state

    // clear out the form input's value so it's empty to the user
   
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)

});

function displayStats() {
    countElm.top.textcontent = `You have changed the head ${top} times.`;
   

    // text content of the reportEl to tell the user how many times they've changed each piece of the state
};


function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases

    // loop through each catchphrase in state
   
    // and for each catchphrase
    
    // create an HTML element with the catchphrase as its text content
    
    // and append that HTML element to the cleared-out DOM
}
