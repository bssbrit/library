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
paginas.setAttribute("type", "number");
paginas.setAttribute("placeholder", "Número de Páginas");

//input checkBox leu ou nãoi

const checkBox = document.createElement("input");
checkBox.setAttribute("type", "checkbox");
checkBox.setAttribute("id", "checkBox");

//const btnConfirmar = document.querySelector("#confirm");

const btnConfirmar = document.createElement("button");
btnConfirmar.setAttribute("id", "confirm");
btnConfirmar.textContent = "Confirmar";

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
  const label = document.createElement("label");
  label.setAttribute("for", "checkBox");
  label.textContent = "Você ja leu o livro?";
  formulario.appendChild(label);
  formulario.appendChild(checkBox);

  //confirmar

  formulario.appendChild(btnConfirmar);
});

//object constructor

const book = function (titulo, autor, numeroPaginas, check) {
  this.titulo = titulo;
  this.autor = autor;
  this.pages = numeroPaginas;
  this.check = check;
};

//btn confirmar click event

btnConfirmar.addEventListener("click", function () {
  let livro = new book(
    `${titulo.value}`,
    `${autor.value}`,
    `${paginas.value}`,
    `${checkBox.value}`
  );
  biblioteca.push(livro);
  console.log(livro);
  console.log(biblioteca);
  document.body.removeChild(formulario);
});
console.log(biblioteca[0]);
/* -------------------- For loop pelo array (biblioteca) que ira realizar o display 








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
