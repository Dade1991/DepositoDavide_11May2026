const prompt = require("prompt-sync")()

// Inizializzo un array vuoto dove collettare i risultati

let results = []

// Funzioni dedicate

function sum(n1, n2) {
  return n1 + n2
}

function subtraction(n1, n2) {
  return n1 - n2
}

function multiply(n1, n2) {
  return n1 * n2
}

function division(n1, n2) {
  // Gestione del controllo di eventuali errori (divisione per 0)
  if (n2 === 0) {
    return "Error: you cannot divide by 0. Try again."
  }
  return n1 / n2
}

// Inizializzo una variabile per la scelta del menu

let menuChoose = ""

// Inizializzo un array dove imposto le uniche operazioni disponibili dal programma

const validOperations = ["sum", "subtraction", "multiply", "division", "stop"]

// Ripeti il blocco while fino a che non è esattamente uguale a stop (finche è diverso da stop, continua)

while (menuChoose !== "stop") {
  console.log("Available operations: sum, subtraction, multiply, division")
  menuChoose = prompt("Type an operation or 'stop': ").toLowerCase().trim() // Per evitare case sensitive (toLowerCase) & per evitare spazi vuoti lasciati dall'utente (trim) entrambi arginano comportamenti non desiderati dall'utente.

  // Controllo che l'input del comando (per operazione aritmetica) dato dall'user sia valida.

  if (!validOperations.includes(menuChoose)) {
    console.log("Operation not valid. Try again.")
    continue
  }

  // Se viene digitato "stop", esce dal ciclo interrompendolo

  if (menuChoose === "stop") {
    break
  }

  // Inizializzo variabili per salvataggio temporaneo parametri da passare alle funzioni

  let num1 = Number(prompt("Insert the first Number: "))
  let num2 = Number(prompt("Insert the second Number: "))

  // Inizializzo variabile che contiene il risultato delle funzioni

  let result

  switch (menuChoose) {
    // Case "sum"

    case "sum":
      result = sum(num1, num2)
      break

    // Case "subtraction"

    case "subtraction":
      result = subtraction(num1, num2)
      break

    // Case "multiply"

    case "multiply":
      result = multiply(num1, num2)
      break

    // Case "division"

    case "division":
      result = division(num1, num2)
      break

    // Defaul Case - In caso lo user inserisca dati invalidi

    default:
      prompt("Operation not valid. Please try again.")
  }

  // Prima di uscire dal ciclo, pusho il risultato che ho ottenuto salvandolo all'interno dell'array di risultati

  results.push(result)

  // Stampo il singolo risultato e l'array dei risultati (si potrebbe pensare di inserire un Alert ma lascio console.log per comodità)

  console.log("The result of your operation is :" + result)
  console.log("Your collected results are: " + results)
}

// Stampo ancora l'array di risultati

prompt("Program finished.")
console.log("Your collected results are: " + results)
