//Istruzioni:
//Create una todo list usando VueJS.
//Potete dare sfogo alla creativitá e per quanto riguarda l'HTML e il CSS.
//Se non sapere che fare, di seguito trovate uno screenshot.

//Funzionalitá:
//La nostra todo list avrá alcune tasks di default predefinite
//L'utente puó inserire nuove tasks
//Cliccando sulla "X" l'utente puó cancellare una task
//Se non ci sono piu task nella lista,
//mostrate un messaggio tipo "Nulla da fare"
//Quando l'utente inserisce una task ha due modi per salvarla:
//o preme il pulsante add 
//o preme il taso Enter della tastiera.
//Attenzione: l'utente non deve inserire tasks vuote ma almeno
//un tot di caratteri.


let todo = new Vue ({
    el: "#app",
    data: {
        frase: "",
        list: [
            "buongiorno",
            "heyla",
        ]
    },
    methods: {
        aggiungiAllaLista () {
            this.list.push(this.frase);
            this.frase = "";
       },
       eliminaElemento () {
           
       }
    }
})