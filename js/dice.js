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
const playElem = document.getElementById('play-btn');
const diceMessageElem = document.getElementById('dice-message');


/* -----------------------------------------
* LOGIC
-------------------------------------------*/

//*** CLICK PLAY BUTTON ***//
playElem.addEventListener('click', function () {

    let gameMessage = '<p>La Partita inizia!</p>';
    
    //*** GAME CICLE ***//
    let hasWinner = false;
    for (let i = 0; !hasWinner; i++) {

        //*** GENERATE DICES ***//
        // Generate CPU dice
        const cpuDice = Math.floor(Math.random() * diceSides) + 1;
        gameMessage += `<p>Dado CPU: ${cpuDice}</p>`;

        // Generate Player dice
        const playerDice = Math.floor(Math.random() * diceSides) + 1;
        gameMessage += `<p>Il tuo Dado: ${playerDice}</p>`;

        //*** CHECK WINNERS ***//
        if(cpuDice > playerDice) {

            hasWinner = true;
            gameMessage += `<p>HAI PERSO!</p>`

        }else if(cpuDice < playerDice) {

            hasWinner = true;
            gameMessage += `<p>HAI VINTO!!!</p>`

        } else {

            gameMessage += `<p>Hai Pareggiato! I dadi vengono rilancaiti</p>`

        }
    }


    //*** SHOW MESSAGE ***//
    diceMessageElem.innerHTML = gameMessage;

    // ! Log message
    console.log(gameMessage);

});