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

let message = 'Hai perso!';


/* -----------------------------------------
* LOGIC
-------------------------------------------*/


//*** GENERATE CPU DICE ***//
// Generate dice
const cpuDice = Math.floor(Math.random() * diceSides) + 1;

// Save dice inside the list
dices.push(cpuDice);

// ! Log CPU Dice
console.log('Dado del Computer: ' + cpuDice);