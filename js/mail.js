/*
1) Mail
- Inventiamo una lista di email a nostro piacimento
- Chiediamo all'utente una mail (con un prompt)
- controlliamo che la mail inserita sia presente nella lista
- se è presente, gli diamo il benvenuto. (in console)
- altrimenti gli diciamo che non può accedere (in console)

BONUS:
- Nell'esercizio mail, raccogliamo la mail dell'utente con un input e facciamo la verifica al click del bottone
- stampiamo i risultati di entrambi gli esercizi in pagina

*/

/* -----------------------------------------
* INIT
-------------------------------------------*/
console.log('------------------------- MAIL ------------------------- ');
console.log('');


//*** DATA ***//
const mails = ['giova@mail.com', 'mario.rossi@mail.com', 'beat99@mail.com'];
let message = 'La mail inserita non è corretta, non puoi accedere!';

// ! Log Data
console.log('Mails');
console.table(mails);


//*** DOM ELEMENTS ***//
const mailElem = document.getElementById('mail');
const loginElem = document.getElementById('login-btn');
const messageElem = document.getElementById('login-message');


/* -----------------------------------------
* LOGIC
-------------------------------------------*/

//*** CLICK LOGIN BUTTON ***//
loginElem.addEventListener('click', function () {


    //*** GET USER MAIL ***//
    //const userMail = prompt('Inserisci la tua mail', 'mario.rossi@mail.com').trim();
    const userMail = mailElem.value.trim();


    //*** VALIDTION ***//
    let isValid = userMail.length > 3;


    if (!isValid) {

        alert('La mail deve avere almeno 3 caratteri!');

        // ! Log Error
        console.log('#ERRORE: La mail deve avere almeno 3 caratteri!');

    } else {

        //*** LOGIN CHECK ***//
        let found = false;

        // Cicle through mails
        for(let i = 0; !found && i < mails.length; i++) {

            const mail = mails[i];

            // Check user mail
            if (userMail === mail) {
                found = true;
                message = `Login avvenuto con successo! Benvenuto ${userMail}`;
            }
        }


        //*** SHOW MESSAGE ***//

        // ! Log Error
        console.log(message);
    }

});