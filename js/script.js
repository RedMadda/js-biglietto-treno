// Il programma dovrà chiedere all'utente il 
// numero di chilometri che vuole percorrere

var km = Math.floor(prompt("Inserisci quanti chilometri vuoi percorrere, per favore."));

// e l'età del passeggero.

var eta = Math.floor(prompt("Bene! Ora inserisci quanti anni hai, per favore!"));

// Sulla base di queste informazioni dovrà 
// calcolare il prezzo totale del viaggio, 
// secondo queste regole: il prezzo del biglietto
// è definito in base ai km (0.21 € al km) va 
// applicato uno sconto del 20% per i minorenni 
// va applicato uno sconto del 40% per gli over
//  65.

var prezzo = km * 0.21;
if(eta >= 65){
    var prezzo = (prezzo - prezzo * 0.4);
} else if(eta < 18) {
    var prezzo = (prezzo - prezzo * 0.2);
}

// L'output del prezzo finale va messo fuori in 
// forma umana (con massimo due decimali, per 
// indicare centesimi sul prezzo). 
document.getElementById("importo").innerHTML = "Importo dovuto:" + " " + prezzo.toFixed(2) + "€.";



