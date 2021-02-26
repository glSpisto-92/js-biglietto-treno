//Numero km del viaggio
var kmViaggio = parseInt(prompt('Quanti km devi percorrere?'));

//Età dell'utente
var etaUtente = prompt('Quanti anni hai?');

//Prezzo per km
var prezzoPerKm = 0.21;


//-20% per i minorenni
if(etaUtente < 18){
    prezzoPerKm = prezzoPerKm -((prezzoPerKm / 100) * 20);
    document.writeln('Grazie per l acquisto! Hai risparmiato il 20% grazie ad un buono sconto eta!');

//-40% per gli over 65
} else if (etaUtente > 65){
    prezzoPerKm = prezzoPerKm -((prezzoPerKm / 100) * 40);
    document.writeln('Grazie per l acquisto! Hai risparmiato il 40% grazie ad un buono sconto eta!');
}else{
    document.writeln('Grazie per aver acquistato su Boolean Transport!');
}



//prezzo finale
var totale = kmViaggio * prezzoPerKm;
totale = totale.toFixed(2);

document.writeln('Il tuo biglietto costa ' + totale + '€');