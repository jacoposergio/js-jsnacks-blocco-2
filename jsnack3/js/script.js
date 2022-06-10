// - Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


//creo l'array vuoto
let numbers = [];

// chiedo 5 volte all'utente di inserie un numero
for(let i = 0; i < 5; i++)
   numbers.push( parseInt( prompt("Inserisci un numero")));
   console.log(numbers);
  
//    creo la variabile sumNumber e la sommo a tutti i numeri
//    dell'array

   let sumNumber = 0
   for(let i = 0; i < numbers.length; i++){
   
       sumNumber += ( parseInt(numbers[i]));
    }
    
    console.log("somma",sumNumber);