let saldo_disponivel = 100;
let valor_compra = 75;

if (saldo_disponivel >= valor_compra) {
    let novo_saldo = saldo_disponivel - valor_compra;
    console.log("Compra aprovada! Seu novo saldo é: " + novo_saldo);
} else {
    console.log("Saldo insuficiente. A compra não pode ser realizada.");
}
