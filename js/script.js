console.log("hi");

/*
2.1.Criar uma relação do botão que ira abrir um formulário com imputs:
        Name of the book
        Author
        Número de páginas
        Checkbox se leu ou não


     let newBook = id(newBook)
     ao clicar em newBook {
   criar elemento form
   e adicionar no body atravez de tudo
   criar element imput(titulo) 
   adicionar no form
   criar imput (autor)
   adicionar no form
   criar numero de paginas
   criar a checklist 
   */

let newBook = document.querySelector(".newButton");
console.log(newBook.textContent);
newBook.addEventListener("click", function () {
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

//object constructor

const book = function (titulo, autor, numeroPaginas, check) {
  this.titulo = titulo;
  this.autor = autor;
  this.pages = numeroPaginas;
  this.check = check;
};

let livro = new book("ola", "bruno", 360, "sim");
console.log(livro);
