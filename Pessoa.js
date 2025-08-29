// 👤 Classe Pessoa com nome e idade
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  // Método para apresentação
  apresentar() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

// 🧪 Exemplo de teste
const pessoaTeste = new Pessoa("Lucas Andrade", 25);

// 🖥️ Exibindo no console
console.log(pessoaTeste.apresentar());

