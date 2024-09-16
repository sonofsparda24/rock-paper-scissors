const prompt = require('prompt-sync')({ sigint: true});


/**
 * Generate a random number between 0 and 2 and return a computer choice based on it.
 * 
 * @author dante
 * @since 1.0.0v
 * @param none
 * @returns string: random computer choice
 */
function getComputerChoice(){
    let comChoice = parseInt(Math.random()*10)%3;
    switch(comChoice){
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors'
        default:
            console.log('Something went wrong while getting computer choice!')
            throw Error;
    }
}

//This line is to be removed
console.log(getComputerChoice())


/**
 * Get player choice through prompt
 * 
 * 
 * @author dante
 * @since 1.0.0v
 * @param none
 * @returns string: player choice
 */
function getPlayerChoice() {
    let playerChoice = prompt(`
Choose you element:
    Rock
    Paper
    Scissors
`);
    if (playerChoice.toUpperCase === 'ROCK'){
        return 'Rock';
    }else if(playerChoice.toUpperCase === 'PAPER'){
        return 'Paper';
    }else if(playerChoice.toUpperCase === 'SCISSORS'){
        return 'Scissors';
    }else{
        console.log('Bad choice');
        getPlayerChoice();
    }
}


//This line is to be removed
getPlayerChoice();