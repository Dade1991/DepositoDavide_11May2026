// Inizializzo varibili degli elementi che vorrei manipolare

let formContainer = document.getElementById("formContainer")

let bookList = document.getElementById("bookList")

let navMenu = document.getElementById("navMenu")

let hamburger = document.getElementById("hamburger")

// Imposto l'ascolto di un evento sul container del form che, al submit, triggera la funzione.
// Il suo comportamento è spiegato di seguito

formContainer.addEventListener("submit", function (event) {
  // All'invio del form (triggerato tramite il bottone all'interno del form stesso con "submit") non ricarica tutta la pagina, il processo prosegue grazie a questo comando.
  // Se non venisse inserito, ogni volta che facciamo un "submit" del form, la pagina si ricaricherebbe non mostrando i valori inseriti
  event.preventDefault()

  // Inizializzo variabili per recuperare elementi del form. Utili

  let bookName = document.getElementById("bookName").value

  let authorName = document.getElementById("authorName").value

  let genreName = document.getElementById("genreName").value

  let publishYear = document.getElementById("publishYear").value

  let bookDescription = document.getElementById("bookDescription").value

  // Inizializzo variabile per la creazione di un contenitore che conterrà i valori forniti degli input

  let bookCard = document.createElement("div")

  // Aggiungo una classe alla contenitore appena creato
  bookCard.classList.add("bookCard")

  // Imposto la struttura HTML che mostrerà, in modo dinamico, i dettagli del libro aggiunto
  bookCard.innerHTML = `
  <h3>${bookName}</h3>
  <hr />
  <p><strong>Autore: </strong>${authorName}</p>
  <p><strong>Genere: </strong>${genreName}</p>
  <p><strong>Anno: </strong>${publishYear}</p>
  <p><strong>Descrizione: </strong>${bookDescription}</p>
  `

  // Imposto dove dovrà montarsi questo elemento bookCard

  bookList.appendChild(bookCard)

  // Reset del form > pulisce/toglie i valori testuali o numerici (o altri che qui non abbiamo) inseriti nei campi di input che, altrimenti, rimarrebbero
  formContainer.reset()
})

// Imposto l'ascolto al click dell'icona dell'hamburgerMenu per attivare/mostrare i links del menu normale

hamburger.addEventListener("click", function () {
  if (window.innerWidth <= 768) {
    navMenu.classList.toggle("active")
  }
})

// Sfrutto l'oggetto "window" (gia inizializzato dal browser) per intervenire direttamente sullo schermo

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    navMenu.classList.remove("active")
  }
})
