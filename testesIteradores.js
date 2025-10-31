// Lista de clientes com data de compra (10 registros)
const compras = [
  { nome: "Ana Souza", dataCompra: "2025-10-25" },
  { nome: "Bruno Lima", dataCompra: "2025-10-15" },
  { nome: "Carla Menezes", dataCompra: "2025-09-28" },
  { nome: "Diego Rocha", dataCompra: "2025-10-05" },
  { nome: "Fernanda Alves", dataCompra: "2025-10-30" },
  { nome: "Gustavo Pereira", dataCompra: "2025-09-20" },
  { nome: "Helena Castro", dataCompra: "2025-10-18" },
  { nome: "Igor Santos", dataCompra: "2025-08-15" },
  { nome: "Julia Martins", dataCompra: "2025-10-27" },
  { nome: "Lucas Oliveira", dataCompra: "2025-10-02" }
];

// Data atual
const hoje = new Date();

// Função para calcular a diferença de dias entre hoje e a data da compra
function diferencaDias(dataCompra) {
  const data = new Date(dataCompra);
  const diffTempo = hoje - data;
  return diffTempo / (1000 * 60 * 60 * 24); // converte milissegundos em dias
}

// Usando forEach para exibir apenas quem comprou nos últimos 30 dias
console.log("Clientes que compraram nos últimos 30 dias:\n");
compras.forEach(compra => {
  if (diferencaDias(compra.dataCompra) <= 30) {
    console.log(`- ${compra.nome} (Compra em: ${compra.dataCompra})`);
  }
});





// Lista com nomes repetidos
const nomes = [
  "Alice",
  "Bruno",
  "Carla",
  "Alice",
  "Daniel",
  "Bruno",
  "Eduarda",
  "Felipe",
  "Carla",
  "Gabriela"
];

// Criando um Set para eliminar nomes duplicados
const nomesUnicos = new Set(nomes);

// Usando um iterador (for...of) para percorrer e exibir apenas os nomes únicos
console.log("Lista de nomes únicos:\n");

for (const nome of nomesUnicos) {
  console.log(nome);
}






// Criando o array com nomes fictícios
const clientes = ["Ana Souza", "Bruno Lima", "Carla Menezes", "Diego Rocha", "Fernanda Alves"];

// Usando for...of para percorrer o array
for (const nome of clientes) {
  console.log(`Enviando e-mail de agradecimento para ${nome}.`);
}
