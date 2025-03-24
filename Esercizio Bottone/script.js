const colorBox = document.getElementById("colorBox") ;
const changeColorBtn = document.getElementById(" changeColorBtn") ;

// Lista di colori da utilizzare
const colors = ["red", "blue", "green", "orange", "purple", "brown", "yellow",] ;

// Indice per tenere traccia del colore corrente
let currentColorIndex = 0 ;

//Funzione che cambia il colore del box
function changeColor() {
    // Prendi il colore della lista in base all'indice
    const newColor = colors[ currentColorIndex] ;
    // Applica il nuovo colore allo sfondo del box
    colorBox.style.backgroundColor = newColor ;
    // Incrementa l'indice per la prossima volta
    // e  se supera la lunghezza dell'array, ricomincia da 0
    currentColorIndex++;
    if (currentColorIndex>= colors.length)
    {
        currentColorIndex = 0 ;
    }
}

// Ascolta l'evento "click" sul bottone
changeColorBtn.addEventListener("click" , changeColor) ;