class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

// --- Exemplo de teste ---
const pessoaTeste = new Pessoa("Laura", 25); // cria uma instância com valores fictícios
pessoaTeste.apresentar(); // chama o método apresentar()

// Resultado esperado no console:
// Olá, meu nome é Laura e tenho 25 anos.
