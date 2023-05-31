# Mail e Dadi

<br>

## Esercizio Mail
### Steps:
- Creo una lista di mail inventate
- Creo un messaggio e lo setto su "non puoi accedere"
- Creo un flag e lo setto su non trovato
- Chiedo all'utente una mail
- **FINCHE** _"non ho trovato la mail"_ **E** _"ho mail nella lista"_
    - Prendo la mail corrente
    - **SE** _"la mail corrente è quella inserita"_
        - Setto il flag su trovato
        - Setto il messaggio con il benvenuto
- Stampo il messaggio
- **FINE**


<br>

---

## Esercizo Dadi
### Steps:
- Creo una lista di dadi vuota [CPU, Giocatore]
- Creo un messaggio con la vittoria della CPU
- Genero il dado della CPU e lo metto nella lista
- **FINCHE** _"non ho 2 numeri"_**OPPURE**_"i dadi sono uguali"_
    - Tiro il dado del giocatore
    - **SE** _"il numero del giocatore è più alto"_
        - Setto il messaggio con la vittoria del giocatore
- Stampo il messaggio
- **FINE**
