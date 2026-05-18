// Esercizio UNO

const prompt = require("prompt-sync")()

let menuChoice = ""
let extra = ""

menuChoice = prompt(
  "Choose a main dish from pasta, pizza & burger. Insert here your selection: ",
)

switch (menuChoice) {
  case "pasta":
    console.log("You have chosen: Pasta")
    extra = prompt("Insert here an extra dressing: ")

    console.log(`Your order consist of: Pasta, with ` + extra + ` topping.`)

    break

  case "pizza":
    console.log("You have chosen: Pizza")
    extra = prompt("Insert here an extra dressing:")

    console.log(`Your order consist of: Pizza, with ` + extra + ` topping.`)

    break

  case "burger":
    console.log("You have chosen: Burger")
    extra = prompt("Insert here an extra dressing:")

    console.log(`Your order consist of: Burger, with ` + extra + ` topping.`)

    break

  default:
    console.log("Not a valid selection")
}

// Esercizio DUE

let role1 = ""
let role2 = ""
let role3 = ""

role1 = prompt("Insert first Role: ")
role2 = prompt("Insert second Role: ")
role3 = prompt("Insert third Role: ")

switch (role1) {
  case "player":
    console.log("Player: can play the game.")
    break

  case "moderator":
    console.log("Moderator: can manage reports.")
    break

  case "admin":
    console.log("Admin: full permissions.")
    break

  default:
    console.log("Unknown role.")
}

switch (role2) {
  case "player":
    console.log("Player: can play the game.")
    break

  case "moderator":
    console.log("Moderator: can manage reports.")
    break

  case "admin":
    console.log("Admin: full permissions.")
    break

  default:
    console.log("Unknown role.")
}

switch (role3) {
  case "player":
    console.log("Player: can play the game.")
    break

  case "moderator":
    console.log("Moderator: can manage reports.")
    break

  case "admin":
    console.log("Admin: full permissions.")
    break

  default:
    console.log("Unknown role.")
}

if (
  (role1 === "player" || role2 === "player" || role3 === "player") &&
  (role1 === "moderator" || role2 === "moderator" || role3 === "moderator")
) {
  console.log("You are both Player and Moderator")
}

if (role1 === "admin" || role2 === "admin" || role3 === "admin") {
  console.log("You are an admin")
}

// Cicli - WHILE booleano
// Esempio di while con uscita tramite input utente
// Modulo per input da console

// Variabile booleana

let active = true

// Ciclo

while (active) {
  // Input utente
  let command = prompt("Write something (write 'esc' to terminate): ")

  // Controllo
  if (command === "esc") {
    console.log("Program closed.")
    active = false
  } else {
    console.log("You have written: " + command)
  }
}

// Esercizio DUE

let numberToCheck = prompt("Choose a random number: ")

numberToCheck = Number(numberToCheck)

// Verifico prima che l'input fornito dall'utente sia corretto, ovvero che sia un numero (NaN), che non sia uguale o inferiore a 0, se il numero che stiamo controllando sia un intero) se questi check passano > ok. Se no > Errore

if (
  isNaN(numberToCheck) ||
  numberToCheck <= 0 ||
  !Number.isInteger(numberToCheck)
) {
  console.log("The insert number is not valid. Please try again.")
} else {
  // Creo due variabili dove storare i numeri pari e dispari sulla base dell'input utente

  let even = 0
  let odd = 0

  // Ciclo FOR: ad ogni iterazione, partendo da 0 e per la lunghezza massima fornita dall'input utent, reitero fino a che non raggiungo il numero inserito dall'utente.

  for (let i = 0; i <= numberToCheck; i++) {
    // Se il numero iterato in quel momento, è divisibile senza resto (%) e non crea resto ( === 0), aggiungerà alla variabile dei numeri pari, un contatore per quel numero pari trovato.
    if (i % 2 === 0) {
      even++
    } else {
      // Altrimenti, sarà semplicemente considerato un numero dispari, aggiungerà alla variabile dei numeri dispari, un contatore per quel numero pari trovato.
      odd++
    }
  }

  // Stampo risultati

  console.log(
    "Inside " + numberToCheck + " value, there are " + even + " even numbers",
  )
  console.log(
    "Inside " + numberToCheck + " value, there are " + odd + " odd numbers",
  )
}
