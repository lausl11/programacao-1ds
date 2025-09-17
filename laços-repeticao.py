# Lista de alunos na sala de aula
lista_de_presenca = ["João", "Maria", "Pedro", "Ana", "Carlos"]

# Nome do aluno que queremos verificar
aluno_a_buscar = "Pedro"

# Verificando se o aluno está na lista
for aluno in lista_de_presenca:
    if aluno == aluno_a_buscar:
        print(f"{aluno_a_buscar} está presente na sala.")
        break  # Encerra o loop assim que encontra o aluno
else:
    # Se o loop terminar sem encontrar o aluno, a mensagem abaixo será exibida
    print(f"{aluno_a_buscar} não está na lista de presença.")




# Definindo o valor objetivo e a economia por semana
valor_objetivo = 100
economia_por_semana = 10

# Inicializando o total economizado e o contador de semanas
total_economizado = 0
semanas = 0

# Loop while para contar as semanas
while total_economizado < valor_objetivo:
    total_economizado += economia_por_semana  # Acumulando a economia a cada semana
    semanas += 1  # Contando o número de semanas

# Exibindo o resultado
print(f"Você precisará de {semanas} semanas para alcançar R$ {valor_objetivo}.")




# Lista simulando mensagens novas no celular (True = nova mensagem, False = sem nova mensagem)
mensagens = [True, True, False, True, False]  # Exemplo com 3 mensagens novas

# Contador para simular o processo de verificar as mensagens
indice = 0

# Loop que continua enquanto houver mensagens novas
while indice < len(mensagens) and mensagens[indice]:
    print("Lendo mensagem...")
    print("Respondendo a mensagem...")
    
    # Marca a mensagem como lida
    mensagens[indice] = False
    indice += 1  # Passa para a próxima mensagem

# Verifica se não há mais mensagens novas
if indice == len(mensagens) or all(mensagem is False for mensagem in mensagens):
    print("Não há mais mensagens novas.")



# Lista com os preços dos itens da compra
precos = [5.50, 2.30, 3.75, 9.90, 4.20]

# Inicializa uma variável para armazenar o total
total = 0

# Loop para somar os preços
for preco in precos:
    total += preco  # Adiciona o preço de cada item ao total

# Exibe o valor total da compra
print(f"O total da sua compra é: R$ {total:.2f}")




# Lista dos dias da semana
dias_da_semana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"]

# Contando os dias até o fim de semana
for dia in dias_da_semana:
    print(f"Hoje é {dia}. Faltam apenas {5 - dias_da_semana.index(dia)} dias para o fim de semana!")
