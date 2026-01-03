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
    let numOfRolls = Number(numOfRollsInput.value);
    if (diceRollResults.length = numOfRolls){
        diceRollResults = [];
    }
    for (let i = x; i > 0; i--){
        diceRollResults.push(Math.ceil(Math.random() * 6));
        console.log(`DiceRollResults: ${diceRollResults}`)
    }
    return diceRollResults.join(' , ');
}

const clearResults = () => {
    diceRollResults = [];
    historyResults = [];
    results.innerHTML = '';
}

const updateResults = () => {
    console.log('Submit Button Pressed')
    let numOfRolls = Number(numOfRollsInput.value);
    results.innerHTML = diceRoller(numOfRolls);
    console.log(`History Array: ${historyResults}`);
    
}

/*const sortResults = () => {

}*/

const updateResultsKey = (keypress) =>{
    if (keypress.key === "Enter"){
        updateResults();
    }
}

const clearResultsKey = (keypress) =>{
    if (keypress.key === "Delete"){
        clearResults();
    }
}

submitButton.addEventListener('click', updateResults);
document.addEventListener('keydown', updateResultsKey);
clearButton.addEventListener('click', clearResults);
document.addEventListener('keydown', clearResultsKey); 
