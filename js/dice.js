/*
1) Mail
- Inventiamo una lista di email a nostro piacimento
- Chiediamo all'utente una mail (con un prompt)
- controlliamo che la mail inserita sia presente nella lista
- se è presente, gli diamo il benvenuto. (in console)
- altrimenti gli diciamo che non può accedere (in console)


2) Gioco dei dadi
- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
- Stabilire il vincitore, in base a chi fa il punteggio più alto.
- Stampare (in console)


BONUS:
- Nell'esercizio mail, raccogliamo la mail dell'utente con un input e facciamo la verifica al click del bottone
- Nell'esercizio dadi, mettiamo un tasto "Gioca" ed eseguiamo la logica di gioco al click del bottone
- stampiamo i risultati di entrambi gli esercizi in pagina

*/

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
const gameTableElem = document.getElementById('game-table');
const roundsElem = document.getElementById('rounds-container');
const gameResultElem = document.getElementById('game-result');


/* -----------------------------------------
* LOGIC
-------------------------------------------*/

//*** CLICK PLAY BUTTON ***//
playBtnElem.addEventListener('click', function () {

    let gameLogMsg = 'La Partita inizia!';
    let rounds = '<tr>';
    
    //*** GAME CICLE ***//
    let hasWinner = false;
    for (let i = 0; !hasWinner; i++) {

        //*** GENERATE DICES ***//
        // Generate CPU dice
        const cpuDice = Math.floor(Math.random() * diceSides) + 1;
        gameLogMsg += `Dado CPU: ${cpuDice}`;

        // Generate Player dice
        const playerDice = Math.floor(Math.random() * diceSides) + 1;
        gameLogMsg += `Il tuo Dado: ${playerDice}`;

        //*** CHECK WINNERS ***//
        if(cpuDice > playerDice) {

            hasWinner = true;
            gameLogMsg += `HAI PERSO!`

        }else if(cpuDice < playerDice) {

            hasWinner = true;
            gameLogMsg += `HAI VINTO!`

        } else {

            gameLogMsg += `Hai Pareggiato! I dadi vengono rilanciati.`

        }
    }


    //*** SHOW MESSAGE ***//
    diceMessageElem.innerHTML = gameLogMsg;

    // ! Log message
    console.log(gameLogMsg);

});