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
        messageElem.innerText = message;

        // ! Log Error
        console.log(message);
    }

});