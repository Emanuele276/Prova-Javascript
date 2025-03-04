// 1. Funzione per calcolare l'area di un rettangolo
function areaRettangolo (base, altezza) {
    return base * altezza;
}

// 2. Funzione per calcolare l'area di un triangolo
const areaTriangolo = (base, altezza) => {
    return ( base * altezza ) / 2;
};

// 3. Funzione per calcolare l'area di un cerchio
const areaCerchio = raggio => {
    return Math.PI * raggio * raggio;
    // π * r^2
};

// 4. Chiedi all'utente quale forma vuole calcolare
let forma = prompt("Quale area vuoi calcolare? (rettangolo, triangolo, cerchio)"). toLowerCase();

let areaFinale = 0; switch (forma) {
    case "rettangolo": 
    let baseRett = parseFloat(prompt("Inserisci la base del rettangolo:"));
    let altRett = parseFloat (prompt("Inserisci l'altezzA del rettangolo:"));
    areaFinale = areaRettangolo(baseRett,altRett);
    console.log("Area del rettangolo:", areaFinale.toFixed(2));
    break;

    case "triangolo" :
    let baseTri = parseFloat(prompt("Inserisci la base del triangolo"));
    let altTri = parseFloat (prompt("Inserisci l'altezza del triangolo"))   
    areaFinale = areaTriangolo(baseTri,altTri);
    console.log("area del triangolo:", areaFinale.toFixed(2));
    break;

    case "cerchio":
    let raggioCerchio = parseFloat(propt("Inserisci il raggio del cerchiio:"));
    areaFinale = areaCerchio(raggioCerchio);
    console.log("Area del cerchio:", areaFinale.toFixed(2));
    break;

    default: console.log("Forma non riconosciuta.");
    break;
     
}

