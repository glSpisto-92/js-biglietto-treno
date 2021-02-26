//Numero km del viaggio
var kmViaggio = parseInt(prompt('Quanti km devi percorrere?'));

//Età dell'utente
var etaUtente = prompt('Quanti anni hai?');

//Prezzo per km
var prezzoPerKm = 0.21;

//-20% per i minorenni
if(etaUtente < 18){
    prezzoPerKm = 0.21 - 0.042;
    alert('Grazie per l acquisto! Hai risparmiato il 20% grazie ad un buono sconto eta!');

    //-40% per gli over 65
} else if (etaUtente > 65){
    prezzoPerKm = 0.21 - 0.084;
    alert('Grazie per l acquisto! Hai risparmiato il 40% grazie ad un buono sconto eta!');
}


//prezzo finale
var totale = kmViaggio * prezzoPerKm;

alert('Il tuo biglietto costa ' + totale + '€');