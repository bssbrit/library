// Elementos do formulario

// array biblioteca

let biblioteca = [];

//form
const formulario = document.createElement("div");
formulario.setAttribute("id", "formulario");
//h4
const novoLivro = document.createElement("h4");
novoLivro.textContent = "Novo Livro";
//autor
const autor = document.createElement("input");
autor.setAttribute("id", "autor");
autor.setAttribute("type", "text");
autor.setAttribute("placeholder", "Autor");

//input titulo
const titulo = document.createElement("input");
titulo.setAttribute("id", "titulo");
titulo.setAttribute("type", "text");
titulo.setAttribute("placeholder", "Titulo");

//input número de pg
const paginas = document.createElement("input");
paginas.setAttribute("id", "paginas");
paginas.setAttribute("type", "text");
paginas.setAttribute("placeholder", "Número de Páginas");

//input checkBox leu ou nãoi

const checkBox = document.createElement("input");
checkBox.setAttribute("type", "checkbox");
checkBox.setAttribute("id", "checkBox");

//const btnConfirmar = document.querySelector("#confirm");

const btnConfirmar = document.createElement("button");
btnConfirmar.setAttribute("id", "confirm");
btnConfirmar.textContent = "Confirmar";

//Checkbox para se eu li ou não
const label = document.createElement("label");
label.setAttribute("for", "checkBox");
label.textContent = "Você ja leu o livro?";

/*
2.1.Criar uma relação do botão que ira abrir um formulário com imputs: */

let newBook = document.querySelector(".newButton");

newBook.addEventListener("click", function () {
  document.body.appendChild(formulario);

  formulario.appendChild(novoLivro);
  //autor

  formulario.appendChild(autor);

  //input titulo

  formulario.appendChild(titulo);

  //input número de pg

  formulario.appendChild(paginas);

  //input checkBox leu ou nãoi

  formulario.appendChild(label);
  formulario.appendChild(checkBox);

  //confirmar

  formulario.appendChild(btnConfirmar);
});

//object constructor

const book = function (titulo, autor, paginas, check) {
  this.titulo = titulo;
  this.autor = autor;
  this.pages = paginas;
  this.check = check;
};

//function addBookToLibrary() {
function addBookToBiblioteca() {
  let livro = new book(
    `${titulo.value}`,
    `${autor.value}`,
    `${paginas.value}`,
    `${checkBox.value}`
  );
  biblioteca.push(livro);
}

// function displayBook
//variavel pratileira
let pratileira = document.getElementById("pratileira");

console.log(pratileira);
function displayBook() {
  //declarar variaveis dos elementos do book
  pratileira.innerHTML = "";
  for (i = 0; i < biblioteca.length; i++) {
    //variaveis
    const bookDisplay = document.createElement("div");
    bookDisplay.setAttribute("class", "book");
    const autorDisplay = document.createElement("p");
    const tituloDisplay = document.createElement("h4");
    const paginasDisplay = document.createElement("p");
    const deleteBtn = document.createElement("button");
    const checkMark = document.createElement("input");
    checkMark.setAttribute("type", "checkbox");

    tituloDisplay.textContent = biblioteca[i].titulo;
    autorDisplay.textContent = biblioteca[i].autor;
    paginasDisplay.textContent = biblioteca[i].pages;
    deleteBtn.textContent = "Delete";

    pratileira.appendChild(bookDisplay);
    bookDisplay.appendChild(tituloDisplay);
    bookDisplay.appendChild(autorDisplay);
    bookDisplay.appendChild(paginasDisplay);
    /*if (biblioteca[i].check == "on") {
      checkMark.value = "on"; ---------------FAZER ISSO ----------
    }*/
    bookDisplay.appendChild(deleteBtn);
    bookDisplay.appendChild(checkMark);
    console.log(biblioteca[i]);
    console.log(deleteBtn);
    deleteBtn.addEventListener("click", function () {
      pratileira.removeChild(bookDisplay);
    });
  }
}

//botão

//btn confirmar click event

btnConfirmar.addEventListener("click", function () {
  addBookToBiblioteca();
  pratileira.innerHTML = "";
  document.body.removeChild(formulario);
  displayBook();
});

//-------------------- For loop pelo array (biblioteca) que ira realizar o display

/*
  btnConfirmar.addEventListener("click", function () {
    console.log("hi");
    let teste = document.createElement("p");
    teste.textContent = "testando";

    let container = document.querySelector(".container");
    container.appendChild(teste);
  });
*/

/*newBook.addEventListener("click", function () {
  //criar element form
  const formulario = document.createElement("FORM");
  formulario.setAttribute("id", "formulario");
  document.body.appendChild(formulario);
  //h4
  const novoLivro = document.createElement("h4");
  novoLivro.textContent = "Novo Livro";
  formulario.appendChild(novoLivro);
  //autor
  const autor = document.createElement("input");
  autor.setAttribute("id", "autor");
  autor.setAttribute("type", "text");
  autor.setAttribute("placeholder", "Autor");
  formulario.appendChild(autor);

  //input titulo
  const titulo = document.createElement("input");
  titulo.setAttribute("id", "titulo");
  titulo.setAttribute("type", "text");
  titulo.setAttribute("placeholder", "Titulo");
  formulario.appendChild(titulo);

  //input número de pg
  const paginas = document.createElement("input");
  paginas.setAttribute("id", "paginas");
  paginas.setAttribute("type", "number");
  paginas.setAttribute("placeholder", "Número de Páginas");
  formulario.appendChild(paginas);

  //input checkBox leu ou nãoi
  const label = document.createElement("label");
  label.setAttribute("for", "checkBox");
  label.textContent = "Você ja leu o livro?";
  formulario.appendChild(label);
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("id", "checkBox");
  formulario.appendChild(checkBox);
});

*/
