/* the idea, so far, is to display a page that you can type how many dice need to be rolled, then have them get sorted by the rolled value.
   5s would go into one area, 4s, in another, etc */
let diceRollResults = [];
let historyResults = [];
//let onesArr = [];
//let twosArr = [];
//let threesArr = [];
//let foursArr = [];
//let fivesArr = [];
//let sixesArr = [];
let numOfRollsInput = document.getElementById('number_of_dice');
let results = document.getElementById('results');
let submitButton = document.getElementById('submit_button');
let clearButton = document.getElementById('clear_button');

const diceRoller = (x) => {
    for (let i = x; i > 0; i--){
        diceRollResults.unshift(Math.ceil(Math.random() * 6));
    }
    let stringRoll = diceRollResults.join(' , ');
    return stringRoll;
}

const updateResults = () => {
    let numOfRolls = Number(numOfRollsInput.value);
    results.innerHTML = diceRoller(numOfRolls);
}

const updateResultsKey = (keypress) =>{
    if (keypress.key === "Enter"){
        updateResults();
    }
}

/*const sortResults = () => {

}*/

const clearResults = () => {
    diceRollResults = [];
    results.innerHTML = '';
}

const clearResultsKey = (keypress) =>{
    if (keypress.key === "Delete"){
        clearResults();
    }
}

submitButton.addEventListener('click', updateResults);
//Enter Key for updateResults
document.addEventListener('keydown', updateResultsKey);
clearButton.addEventListener('click', clearResults);
//Delete Key for clearResults
document.addEventListener('keydown', clearResultsKey); 
