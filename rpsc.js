const prompt = require('prompt-sync')({ sigint: true});


/**
 * Generate a random number between 0 and 2 and return a computer choice based on it.
 * 
 * @author dante
 * @since 1.0.0v
 *
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



/**
 * Get player choice through prompt
 * 
 * 
 * @author dante
 * @since 1.0.0v
 *
 * @returns string: player choice
 */
function getPlayerChoice() {
    let playerChoice = prompt(`
Choose you element:
    Rock
    Paper
    Scissors
`);

    console.log(playerChoice);

    if (playerChoice.toUpperCase() === 'ROCK'){
        return 'Rock';
    }else if(playerChoice.toUpperCase() === 'PAPER'){
        return 'Paper';
    }else if(playerChoice.toUpperCase() === 'SCISSORS'){
        return 'Scissors';
    }else{
        console.log('Bad choice');
        getPlayerChoice();
    }
}




//the link doesn't work, but i don't give a fuck about that rn

/**
 * A function that reassigns com and user choice following these rule:
 * 
 * pos 0: vsRock, pos 1: vsPaper, pos 2: vsScissors
 * 
 * d: draw, w: win, l: lose
 * 
 * 
 * 
 * @author dante;
 * @since 1.0.0
 * @see {@link <a href="README.md">README.md on reassignChoice</a>}
 * @param {*} choice 
 * @returns {Array} win conditions
 */
function reassignChoice(choice){
    switch (choice){
        case 'Rock':
            return ['d','l','w'];
        case 'Paper':
            return ['w','d','l'];
        case 'Scissors':
            return ['l','w','d'];
        default:
            throw Error('Unable to reassign choice')
    }
}

/*
console.log(reassignChoice('Rock'));
console.log(reassignChoice('Paper'));
console.log(reassignChoice('Scissors'));
*/






//Game functions and static variables
let comScore = 0;
let userScore = 0;

/**
 * Logic to play a single round of the game
 * 
 * 
 * @author dante
 * @since v1.0.0
 * @see README.md on roundWinner
 * 
 */
function playRound(){
    let com = getComputerChoice();
    let user = getPlayerChoice();

    let winConditions = reassignChoice(user);
    let pos = -1;
    if (com === 'Rock'){
        pos = 0;
    }else if (com === 'Paper'){
        pos = 1;
    }else if (com === 'Scissors'){
        pos = 2;
    }else{
        throw Error('Normally this bug wouldn\'t make it this far');
    }

    console.log(`
        Your Choice: ${user}
        Com choice: ${com}
        `);
    switch (winConditions[pos]){
        case 'w':
            console.log(`User wins, ${user} beats ${com}`);
            userScore++; break;
        case 'l':
            console.log(`Computer wins: ${com} beats ${user}`);
            comScore++; break;
        case 'd':
            console.log("No winner, this round ends by a draw"); break;
        default:
            throw Error('Okay how the fuck did error end up here!');
    }
}


playRound();


/*
TODO
    declare score variables ~~~~~~~
    write the logic to play a single round ~~~~~~~~~~~
    write the logic to play a game of 5 rounds
*/

