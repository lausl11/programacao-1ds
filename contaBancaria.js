class ContaBancaria {
  constructor(saldo = 0) {
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      console.log(`Saque realizado. Novo saldo: ${this.saldo}`);
    } else {
      console.log("Saldo insuficiente");
    }
  }
}

// Criando uma instância e realizando um saque
const minhaConta = new ContaBancaria(50);
minhaConta.sacar(10); // Saque realizado. Novo saldo: 40

