class Livros {
  // não somos obrigados a declarar o constructor, mas mesmo assim , o javascript vai criar um por debaixo dos panos
  #titulo;
  #autor;
  #ano;
  #emprestado;

  constructor(titulo, autor, ano, emprestado = false) {
    this.#titulo = titulo;
    this.#autor = autor;
    this.#ano = ano;
    this.#emprestado = emprestado;
  }
  emprestarLivro() {
    if (!this.#emprestado) {
      this.#emprestado = true;
      console.log("pode pegar o livro");
    } else {
      console.log("Infelizmente o livro não está disponivel");
    }
  }
  static ordernar(livro) {
    //   modifica o array
    livro.sort((a, b) => a.ano - b.ano);
    console.log(livro);
  }
  set titulo(titulo) {
    this.#titulo = titulo;
  }
  set autor(autor) {
    this.#autor = autor;
  }
  set ano(ano) {
    this.#ano = ano;
  }
  set emprestado(emprestado) {
    this.#emprestado = emprestado;
  }
  get titulo() {
    return this.#titulo;
  }
  get autor() {
    return this.#autor;
  }
  get ano() {
    return this.#ano;
  }
  get emprestado() {
    return this.#emprestado;
  }
}

class Hq extends Livros {
  #ilustrador;

  constructor(titulo, autor, ilustrador, ano) {
    super(titulo, autor, ano);
    this.#ilustrador = ilustrador;
  }
}

const manga = new Hq(
  "naruto",
  "kishimoto",
  "kishimoto",
  2000,
  (emprestado = false)
);
manga.ano = 500;
console.log(manga);
