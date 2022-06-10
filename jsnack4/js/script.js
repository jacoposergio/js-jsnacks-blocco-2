// TODO - Crea due array che hanno un numero di elementi diversi.
// TODO   Aggiungi elementi casuali all’array che ha meno elementi,
// TODO  fino a quando ne avrà tanti quanti l’altro.

const firstArray = [1,2,3,4,5,6,7,8,9];

const secondArray = [32,12,13,24];

// calcolo la differenza tra l'array più lungo e quello più corto
let finalLenght = parseInt( firstArray.length - secondArray.length );
console.log("lunghezza differenza",finalLenght);

// genero i numeri casuali e li pusho nell'array
let multi = 0;
for (let i = 1; i <= finalLenght; i++) {
    multi = i*( Math.floor(Math.random() * 10) +
     1);
    secondArray.push(multi);
}

console.log("",secondArray);

