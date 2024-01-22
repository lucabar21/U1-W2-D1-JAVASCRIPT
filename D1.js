/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
  string      --> E' una keyword che descrive una stringa di testo. Viene delimitata da apici, ma anche da virgolette normali e reverse.
  number      --> E' una keyword che descrive un numero.
  boolean     --> E' una keyword che permette solo il risultato di "true" (vero) o "false" (falso)
  undefinited --> E' una keyword che descrive un valore non ancora esistente. Può essere differenziata da "null" per un fattore di intenzionalità.
                  Quest'ultima infatti viene utilizzata di proposito per settare un valore nullo e per poterlo variare successivamente.
                  Nel primo caso invece è più probabile che sia stata una dimenticanza.
  null        --> E' una keyword che descrive l'assenza di un valore. (approfondimenti nel datatype precedente)   

    */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Luca";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

console.log(12 + 20);

// Si poteva anche fare assegnando delle variabili Es.
// let num1 = 12
// let num2 = 20
// let somma = (num1 + num2)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Barbuto";
console.log(myName);

// const mySurname = Barbuto
// mySurname = Pierozzi
// Nel caso della const (costante) non può avvenire una riassegnazione proprio perchè il suo valore rimane costante!

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(x - 4);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
console.log(name1 === name2);
name2 = name2.toLowerCase();
console.log(name1 === name2);
