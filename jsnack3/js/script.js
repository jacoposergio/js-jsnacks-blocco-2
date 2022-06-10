// TODO  - Il software deve chiedere per 5 volte all’utente di inserire un numero.
// TODO  Il programma stampa la somma di tutti i numeri inseriti.
 // TODO Esegui questo programma in due versioni, con il for e con il while.


// !creo l'array vuoto
// let numbers = [];

// ! chiedo 5 volte all'utente di inserire un numero
// for(let i = 0; i < 5; i++)
//    numbers.push( parseInt( prompt("Inserisci un numero")));
//    console.log(numbers);
  
// !    creo la variabile sumNumber e la sommo a tutti i numeri
// !    dell'array

//  let sumNumber = 0
//    for(let i = 0; i < numbers.length; i++){
   
//        sumNumber += ( parseInt(numbers[i]));
//     }
    
    // ! stampo la somma
    // console.log("somma",sumNumber);

// TODO ////////////////// versione col ciclo while ///////////
// TODO /////////////////////////////////////////////////////////

// !creo l'array vuoto
let numbers = [];

// ! chiedo 5 volte i numeri all'utente
while(numbers.length < 5) {
    let userNumbers = prompt('Dimmi un numero');

   // ! pusho i numeri dati dall'utente nell'array  
    numbers.push(userNumbers);

}
    console.log(numbers);


// ! impost sum = 0 e lo sommo a tutti i numeri dell'array
  let i = numbers.length;
  let sum = 0;
  while (i--) {
    sum += ( parseInt(numbers[i]));
  }

//!   stampo il risultato 
 console.log("somma",sum);
