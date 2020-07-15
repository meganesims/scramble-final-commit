let words = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
let scramble = [
    ['j','a','n','u','a','r','y'], ['f','e','b','r','u','a','r','y'], ['m','a','r','c','h'], ['a','p','r','i','l'], ['m','a','y'],
    ['j','u','n','e'], ['j','u','l','y'], ['a','u','g','u','s','t'], ['s','e','p','t','e','m','b','e','r'], ['o','c','t','o','b','e','r'],
    ['n','o','v','e','m','b','e','r'], ['d','e','c','e','m','b','e','r']
];

let active = false;
let strikesLeft = 3;
let maxStrikes = 3;
let passesLeft = 3;
let maxPasses = 3;
let points = 0;
let rand;
let scrambled = "";
let random;

function start() {
    if (active == false) {
        words = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august',
            'september', 'october', 'november', 'december'];
        scramble = [
            ['j','a','n','u','a','r','y'], ['f','e','b','r','u','a','r','y'], ['m','a','r','c','h'], ['a','p','r','i','l'],
            ['m','a','y'], ['j','u','n','e'], ['j','u','l','y'], ['a','u','g','u','s','t'], ['s','e','p','t','e','m','b','e','r'],
            ['o','c','t','o','b','e','r'], ['n','o','v','e','m','b','e','r'], ['d','e','c','e','m','b','e','r']
        ];
        active = true;
        strikesLeft = 3;
        passesLeft = 3;
        points = 0;
        return scrambleWord();
    } else {
        console.error('Game is already running.');
    }
}


function guess(right) {
    if (active == true) {
       if (words[random].toUpperCase() === right.toUpperCase()) {
           points++;
           console.warn('Correct! current score: ' + points);
           words.splice(random, 1);
           scramble.splice(random, 1);
           if (words.length > 0) {
                return scrambleWord();
           } else {
               active = false;
               console.warn('Game over. final score is ' + points);
               return 'Please use start() to start a new game.';
           }
           
       } else {
           if (strikesLeft > 0) {
                strikesLeft--;
                console.warn('Wrong! you have ' + strikesLeft + ' more strikes left.')
                return scrambled.toUpperCase();
           } else {
               active = false;
                console.warn('You are out of strikes. Game over. final score is ' + points);
                return 'Please use start() to start a new game.';
           }
            
       }
        
    } else {
        console.warn('There is no current game.');
        return 'Please use start() to start a new game.';
    }
}


function pass() {
    if (active == true) {
        if (passesLeft > 0) {
            passesLeft--;
            console.warn('You have passed this word, ' + passesLeft + ' more passes left.');
            words.splice(random, 1);
            scramble.splice(random, 1);
            return scrambleWord();
        } else {
            console.warn('Sorry! no more passes left.');
            return scrambled.toUpperCase();
        }

    } else {
        console.warn('There is no current game.');
        return 'Please use start() to start a new game.';    
    }

}


function help() {
    console.warn('Once you start the game, you will be given a scrambled word.');
    console.warn('If you correctly guess the word, you will receive a point. If you guess incorrectly you will receive a strike. You can also pass on a word.')
    return 'Good luck';
}
function scrambleWord() {
    scrambled = '';
    random = Math.floor(Math.random() * words.length);
for (let i = 0; i < scramble[random].length; i++) {
    rand = Math.floor(Math.random() * scramble[random].length);
    let temp = scramble[random][rand];
    scramble[random][rand] = scramble[random][i];
    scramble[random][i] = temp; 
}
for (let i = 0; i < scramble[random].length; i++) {
    scrambled += scramble[random][i]; 
}
    return scrambled.toUpperCase();
}