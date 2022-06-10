// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.

// creo array vuoto 


const numbersArray = [];

let sum = 0;

while (sum < 50){

    let userNumber = prompt('inserisci numero');

    userNumber = parseInt(userNumber);


sum += userNumber;

numbersArray.push(userNumber);

}

console.log("",dsdq);