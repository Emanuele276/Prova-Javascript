// 1. Chiedi all'utente il prezzo
let prezzo = prompt( "Inserisci il prezzo del prodotto:" );
 prezzo = parseFloat(prezzo); // convertila stringa in numero decimale


 // 2. chiedi se ha un coupon (si/no)
let haCoupon = prompt ("Hai un coupon sconto?  (si/no)");


// 3. Imposta regole per lo sconto
// - se l'utente ha coupon, applichiamo uno sconto del 20 %
// - altrimenti nessuno sconto
// - BONUS: se il prezzo è sopra un certovalore ( es. 100€), applichiamo uno sconto extra


let sconto = o
if (haCoupon.toLowerCase()==="si" || 
haCoupon.toLowerCase()==="si") {
  sconto = 0.20; // 20%
}

// Se il prezzo è maggiore di 100, sconto aggiuntivo del 5%
if (prezzo > 100){
    sconto += 0.05; // 5% aggiuntivo
}

// 4. Calcola il prezzo finale
let prezzoFinale = prezzo - (prezzo * sconto);


// 5. Mostra il risultato in console
console.log("Prezzo iniziale:", prezzo);
console.log("Sconto applicato:", sconto * 100 + "%");
console.log(" Prezzo finale:", prezzoFinale.toFixed (2)) ;
