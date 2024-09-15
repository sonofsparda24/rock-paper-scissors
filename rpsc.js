const prompt = require('prompt');

function computerChoice(){
    let comChoice = parseInt(Math.random()*10)%3;
    switch(comChoice){
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors'
    }
}

console.log(computerChoice());