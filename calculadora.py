// calculadora.js
const readline = require('readline');

// Criando interface para entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitando os números ao usuário
rl.question("Digite o primeiro número: ", (num1) => {
    rl.question("Digite o segundo número: ", (num2) => {
        // Convertendo entrada para número e calculando a soma
        const soma = parseFloat(num1) + parseFloat(num2);

        console.log(`A soma de ${num1} e ${num2} é ${soma}`);

        // Fechando a interface de entrada
        rl.close();
    });
});
