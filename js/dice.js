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


//*** DATA ***//
const dices = [];
const diceSides = 6;

let gameMessage = 'La Partita inizia!\n';

/* -----------------------------------------
* LOGIC
-------------------------------------------*/


//*** GAME CICLE ***//
let hasWinner = false;
for (let i = 0; !hasWinner; i++) {

    //*** GENERATE DICES ***//
    // Generate CPU dice
    const cpuDice = Math.floor(Math.random() * diceSides) + 1;
    gameMessage += `Dado CPU: ${cpuDice}\n`;

    // Generate Player dice
    const playerDice = Math.floor(Math.random() * diceSides) + 1;
    gameMessage += `Il tuo Dado: ${playerDice}\n`;

    //*** CHECK WINNERS ***//
    if(cpuDice > playerDice) {

        hasWinner = true;
        gameMessage += `HAI PERSO!\n`

    }else if(cpuDice < playerDice) {

        hasWinner = true;
        gameMessage += `HAI VINTO!!!\n`

    } else {

        gameMessage += `Hai Pareggiato! I dadi vengono rilancaiti\n`

    }
}


//*** SHOW MESSAGE ***//
// ! Log message
console.log(gameMessage);