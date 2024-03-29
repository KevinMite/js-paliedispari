// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

let parola = prompt('Scrivimi una parola')

function ruotaParola(parola){
    let parolaRibaltata = ''

    for( let i = parola.length - 1; i >= 0; i--){
        parolaRibaltata += parola[i]
    }

    return parolaRibaltata
}

let parolaReverse = ruotaParola(parola);

if( parola == parolaReverse){
    console.log(`La parola: ${parola} è palindroma`)
}else{
    console.log(`La parola: ${parola} NON è palindroma`)
}

// ***************** Pari o Dispari ***********************

let sceltaUtente = prompt('scegli pari o dispari')
let numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5'))

function numeroRandom(max, min){
    return Math.floor(Math.random()* max) + min
}

let numeroPc = numeroRandom (1,5);
console.log (`numero scelta utente: ${sceltaUtente}`)
console.log (`numero computer: ${numeroPc}`)
console.log (`numero utente: ${numeroUtente}`)


let somma = numeroPc + numeroUtente;
console.log (`somma numeri: ${somma}`)


function pariDispari(x){
    if (x % 2 == 0 ){
        return 'pari'
    }else{
        return 'dispari'
    }
}

if(pariDispari(somma)== sceltaUtente){
    console.log (' ha vinto la persona ')
}else{
    console.log (' ha vinto il pc ')

}