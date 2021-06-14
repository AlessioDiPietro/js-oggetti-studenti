// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


//* Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var infoStudente = {
    nome : "Luke",
    cognome : "Skywalker",
    age : 20 + "anni"
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
        age : 20 + "anni"
    },
    {
        nome : "Tony",
        cognome : "Stark",
        age : 24 + "anni"
    },
    {
        nome : "Bilbo",
        cognome : "Baggins",
        age : 22 + "anni"
    }
];

//* Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (var i = 0; i < listaStudenti.length; i++){
    
    document.getElementById("lista_studenti_nome").innerHTML += listaStudenti[i]["nome"] + ", ";
    document.getElementById("lista_studenti_cognome").innerHTML += listaStudenti[i]["cognome"] + ", ";

    for (var j in listaStudenti[i]){
    
    };
}

//* Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var newNome = prompt("prego inserire IL NOME DEL NUOVO STUDENTE.");
var newCognome = prompt("prego inserire IL COGNOME DEL NUOVO STUDENTE.");
var newAge = parseInt(prompt("prego inserire L'ETA' DEL NUOVO STUDENTE."));


listaStudenti.push(
    {
        nome : newNome,
        cognome : newCognome,
        age : newAge + "anni"
    }
);


for (var i = 0; i < listaStudenti.length; i++){

    for (var j in listaStudenti[i]){
        document.getElementById("lista_studenti_completa").innerHTML += listaStudenti[i][j] + " ";
    };

};