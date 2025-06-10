def classificar_produto(preco):
    if preco <= 100:
        return "Baixo custo"
    elif 101 <= preco <= 500:
        return "Médio custo"
    else:
        return "Alto custo"

# Solicita ao usuário o preço do produto
preco_produto = float(input("Digite o preço do produto: R$ "))

# Exibe a classificação
categoria = classificar_produto(preco_produto)
print(f"O produto se enquadra na prateleira de: {categoria}")
