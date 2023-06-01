/* -----------------------------------------
* INIT
-------------------------------------------*/
console.log('');
console.log('------------------------- DADI ------------------------- ');
console.log('');


//*** DATA ***//
const diceSides = 6;


//*** DOM ELEMENTS ***//
const playBtnElem = document.getElementById('play-btn');
const gameContainerElem = document.getElementById('game-container');
const roundsElem = document.getElementById('rounds-container');
const gameResultElem = document.getElementById('game-result');


/* -----------------------------------------
* LOGIC
-------------------------------------------*/

//*** CLICK PLAY BUTTON ***//
playBtnElem.addEventListener('click', function () {

    let gameLogMsg = 'La Partita inizia!\n';
    let rounds = '';
    let resultMsg;
    

    //*** GAME CICLE ***//
    let hasWinner = false;
    for (let i = 0; !hasWinner; i++) {


        //*** GET ROUND NUMBER ***//
        rounds += `<tr><td>${i}</td>`;


        //*** GENERATE DICES ***//
        // Generate CPU dice
        const cpuDice = Math.floor(Math.random() * diceSides) + 1;
        gameLogMsg += `Dado CPU: ${cpuDice}\n`;
        rounds += `<td class="text-center">${cpuDice}</td>`;

        // Generate Player dice
        const playerDice = Math.floor(Math.random() * diceSides) + 1;
        gameLogMsg += `Il tuo Dado: ${playerDice}\n`;
        rounds += `<td class="text-center">${playerDice}</td></tr>`;

        
        //*** CHECK WINNERS ***//
        // CPU Win
        if (cpuDice > playerDice) {

            hasWinner = true;
            gameLogMsg += `HAI PERSO!\n`;
            resultMsg = '<div class="bg-danger">HAI PERSO!</div>';

        }// Player Win
        else if (cpuDice < playerDice) {

            hasWinner = true;
            gameLogMsg += `HAI VINTO!\n`;
            resultMsg = '<div class="bg-success">HAI VINTO!</div>';

        } // Draw 
        else {

            gameLogMsg += `Hai Pareggiato! I dadi vengono rilanciati.\n`

        }
    }


    //*** SHOW RESULT ***//
    roundsElem.innerHTML = rounds;
    gameResultElem.innerHTML = resultMsg;
    gameContainerElem.classList.remove('d-none');

    // ! Log message
    console.log(gameLogMsg);
    console.log('');

});