const prodotto = {
  nome: "Mouse Gaming",
  categoria: "Accessori",
  prezzo: 29.99,
}

function generaJSON() {
  const json = JSON.stringify(prodotto, null, 2)
  document.getElementById("risultato").innerText = json
}

function generaCSV() {
  const csv =
    "nome,categoria,prezzo\n" +
    prodotto.nome +
    "," +
    prodotto.categoria +
    "," +
    prodotto.prezzo

  document.getElementById("risultato").innerText = csv
}

function generaXML() {
  const xml =
    "<prodotto>\n" +
    "  <nome>" +
    prodotto.nome +
    "</nome>\n" +
    "  <categoria>" +
    prodotto.categoria +
    "</categoria>\n" +
    "  <prezzo>" +
    prodotto.prezzo +
    "</prezzo>\n" +
    "</prodotto>"

  document.getElementById("risultato").innerText = xml
}
