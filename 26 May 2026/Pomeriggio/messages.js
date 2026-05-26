// Importo il modulo built-in fs di Node.js.
// Serve per lavorare con il file system: leggere, scrivere, cancellare file, ecc.

const fs = require("node:fs")

// Definisco la funzione richiesta dall'esercizio.
// Riceve come parametro il nome del file da leggere.

function showMessage(fileName) {
  // fs.readFile legge il contenuto del file in modo asincrono.
  // Parametri:
  // - percorso del file
  // - codifica del testo
  // - funzione callback eseguita quando la lettura è terminata

  fs.readFile(fileName, "utf8", (error, content) => {
    // Se c'è un error, lo mostro e interrompo la funzione.

    if (error) {
      console.error("Error retring the file: ", error.message)
      return
    }

    // Se tutto va bene, stampo nel terminale il contenuto letto.

    console.log("File content: ")
    console.log(content)
  })
}

// Esporto la funzione, così potrà essere usata in server.js.
// Con module.exports rendo disponibile all'esterno ciò che voglio esportare.

module.exports = { showMessage }
