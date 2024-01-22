// Ricetta Spaghetti alla carobana per 4 persone
let ing1 = "Spaghetti";
let ing2 = "Guanciale";
let ing3 = "Uovo intero";
let ing4 = "Tuorlo d'uovo";
let ing5 = "Pecorino Romano DOP";
let ing6 = "Pepe nero";

let ingredienti = ing1 + ", " + ing2 + ", " + ing3 + ", " + ing4 + ", " + ing5 + " e " + ing6;
console.log("Gli ingredienti per cucinare degli spaghetti alla carbonara sono: " + ingredienti);

let qIng1 = 320;
let qIng2 = 200;
let qIng3 = 1;
let qIng4 = 3;
let qIng5 = 120;
let qIng6 = "q.b.";

let ricetta =
  ing1 +
  " " +
  qIng1 +
  " gr, " +
  ing2 +
  " " +
  qIng2 +
  " gr, " +
  ing3 +
  " " +
  qIng3 +
  ", " +
  ing4 +
  " " +
  qIng4 +
  ", " +
  ing5 +
  " " +
  qIng5 +
  "gr, " +
  ing6 +
  " " +
  qIng6;
console.log("La ricetta per cucinare degli spaghetti alla carbonara per quattro persone sono: " + ricetta);

qIng3 = 50;
qIng4 = 20;
qIng6 = 2;

let peso4 = qIng1 + qIng2 + qIng3 + qIng4 + qIng5 + qIng6;
console.log("Il peso totale di questi ingredienti per quattro porzioni di spaghetti è: " + peso4 + " gr.");

let peso1 = peso4 / 4;
console.log("Il peso totale di questi ingredienti per singola porzione di spaghetti è: " + peso1 + " gr.");
