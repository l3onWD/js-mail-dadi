/* -----------------------------------------
* INIT
-------------------------------------------*/
console.log('------------------------- MAIL ------------------------- ');
console.log('');


//*** DATA ***//
const mails = ['giova@mail.com', 'mario.rossi@mail.com', 'beat99@mail.com'];

// ! Log Data
console.log('Mails');
console.table(mails);


//*** DOM ELEMENTS ***//
const mailElem = document.getElementById('mail');
const loginElem = document.getElementById('login-btn');
const loginMsgElem = document.getElementById('login-message');


/* -----------------------------------------
* LOGIC
-------------------------------------------*/

//*** CLICK LOGIN BUTTON ***//
loginElem.addEventListener('click', function () {
    
    //*** CREATE LOGIN MESSAGE ***//
    let logMsg = 'La mail inserita non è corretta, non puoi accedere!';
    let loginMsg = `<p class="alert alert-danger">${logMsg}</p>`;


    //*** GET USER MAIL ***//
    //const userMail = prompt('Inserisci la tua mail', 'mario.rossi@mail.com').trim();
    const userMail = mailElem.value.trim();


    //*** VALIDTION ***//
    let isValid = userMail.length > 3;


    if (!isValid) {

        //*** UPDATE INVALID STATE ***//
        // Apply validation style
        mailElem.classList.add('is-invalid');

        // Update login message
        logMsg = 'La mail deve avere almeno 3 caratteri!';
        loginMsg = `<p class="alert alert-danger">${logMsg}</p>`;


    } else {

        //*** RESET INVALID STATE ***//
        mailElem.classList.remove('is-invalid');


        //*** LOGIN CHECK ***//
        let found = false;

        // Cicle through mails
        for(let i = 0; !found && i < mails.length; i++) {

            const mail = mails[i];

            // Check user mail
            if (userMail === mail) {
                found = true;
                logMsg = `Login avvenuto con successo! Benvenuto ${userMail}`;
                loginMsg = `<p class="alert alert-success">${logMsg}</p>`;
            }
        }


    }


    //*** SHOW MESSAGE ***//
    loginMsgElem.innerHTML = loginMsg;

    // ! Log Result
    console.log(logMsg);

});