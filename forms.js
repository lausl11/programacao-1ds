// Estruturas de dados
let nomes = [];
let emails = new Set();
let telefones = new Map();

// Cadastro de 10 nomes
for (let i = 0; i < 10; i++) {
    let nome = prompt(`Digite o nome do cliente ${i + 1}:`);
    nomes.push(nome);
}

// Cadastro de 10 e-mails únicos
for (let i = 0; i < 10; i++) {
    let email = prompt(`Digite o e-mail do cliente ${i + 1}:`);
    emails.add(email); // Set ignora duplicados automaticamente
}

// Cadastro de 10 pares ID → telefone
for (let i = 0; i < 10; i++) {
    let id = prompt(`Digite o ID do cliente ${i + 1}:`);
    let telefone = prompt(`Digite o telefone do cliente ${i + 1}:`);
    telefones.set(id, telefone);
}

// Exibir os dados no console
console.log("📋 Lista de Nomes Cadastrados:");
nomes.forEach((nome, i) => {
    console.log(`${i + 1}. ${nome}`);
});

console.log("\n📧 Conjunto de E-mails Únicos:");
[...emails].forEach((email, i) => {
    console.log(`${i + 1}. ${email}`);
});

console.log("\n📞 Mapa de Telefones por ID:");
telefones.forEach((telefone, id) => {
    console.log(`ID: ${id} → Telefone: ${telefone}`);
});
