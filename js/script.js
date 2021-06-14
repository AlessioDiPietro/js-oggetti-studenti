// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


//* Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var infoStudente = {
    nome : "Luke",
    cognome : "Skywalker",
    age : 20,
};

//* Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in infoStudente){
    document.getElementById("lista_proprieta").innerHTML += infoStudente[key] + " ";
}


//* Creare un array di oggetti di studenti.

var listaStudenti = [
    {
        nome : "Luke",
        cognome : "Skywalker",
        age : 20,
    },
    {
        nome : "Tony",
        cognome : "Stark",
        age : 24,
    },
    {
        nome : "Bilbo",
        cognome : "Baggins",
        age : 22,
    }
];

//* Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (var i = 0; i < listaStudenti.length; i++){
    
        document.getElementById("lista_studenti_nome").innerHTML += listaStudenti[i]["nome"] + " ";
        document.getElementById("lista_studenti_cognome").innerHTML += listaStudenti[i]["cognome"] + " ";
}