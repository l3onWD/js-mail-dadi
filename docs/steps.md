# Mail e Dadi

<br>

## Esercizio Mail
### Steps:
- Creo una lista di mail inventate
- Creo un messaggio e lo setto su "non puoi accedere"
- Creo un flag e lo setto su non trovato
- [bonus] Recupero gli elementi del DOM (input, bottone "Entra" e contenitore messaggio)
- Chiedo all'utente una mail
- [bonus] **QUANDO** _"Clicco su Entra"_
    - **SE** _"la mail è vuota"_
        - Segnalo all'utente l'errore
        - **FINE**
    - **ALTRIMENTI**
        - **FINCHE** _"non ho trovato la mail"_ **E** _"ho mail nella lista"_
            - Prendo la mail corrente
            - **SE** _"la mail corrente è quella inserita"_
                - Setto il flag su trovato
                - Setto il messaggio con il benvenuto
        - Stampo il messaggio
        - [bonus] Mostro il messaggio nella pagina
        - **FINE**


<br>

---

## Esercizo Dadi
### Steps:
- Creo una lista di dadi vuota [CPU, Giocatore]
- Creo un contenitore per i messaggi del gioco
- [bonus] Recupero gli elementi del DOM (bottone "Gioca" e contenitore messaggio)
- [bonus] **QUANDO** _"Clicco su Gioca"_
    - Creo un flag per la fine della partita e lo setto su false
    - **FINCHE** _"non ho un vincitore"_
        - Tiro il dado della CPU
        - Tiro il dado del Giocatore
        - **SE** _"il numero della CPU è più alto"_
            - Setto il messaggio con la vittoria della CPU
            - Setto il flag su true
        - **SE INVECE** _"il numero della CPU è più basso"_
            - Setto il messaggio con la vittoria del Giocatore
            - Setto il flag su true
        - **ALTRIMENTI**
            - Setto il messaggio con il pareggio
    - Stampo il messaggio
    - [bonus] Mostro il messaggio nella pagina
    - **FINE**
