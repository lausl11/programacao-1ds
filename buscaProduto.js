function buscarProduto(listaProdutos, nomeProduto) {
  for (let i = 0; i < listaProdutos.length; i++) {
    if (listaProdutos[i].nome === nomeProduto) {
      return listaProdutos[i];
    }
  }
  return null;
}

const produtos = [
  { nome: "Notebook", preco: 3500 },
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 150 }
];

const produtoBuscado = buscarProduto(produtos, "Mouse");
console.log(produtoBuscado);
