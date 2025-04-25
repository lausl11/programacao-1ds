let x = 10; // Declara uma variável 'x' e atribui o valor inicial 10
console.log(`Valor inicial de x: ${x}`); // Imprime: Valor inicial de x: 10

x += 5;    // Atribuição de adição: x = x + 5 → 10 + 5 = 15 (x agora vale 15)
console.log(`Após x += 5: ${x}`); // Imprime: Após x += 5: 15

x -= 3;    // Atribuição de subtração: x = x - 3 → 15 - 3 = 12 (x agora vale 12)
console.log(`Após x -= 3: ${x}`); // Imprime: Após x -= 3: 12

x *= 2;    // Atribuição de multiplicação: x = x * 2 → 12 * 2 = 24 (x agora vale 24)
console.log(`Após x *= 2: ${x}`); // Imprime: Após x *= 2: 24

x /= 4;    // Atribuição de divisão: x = x / 4 → 24 / 4 = 6 (x agora vale 6)
console.log(`Após x /= 4: ${x}`); // Imprime: Após x /= 4: 6

x %= 5;    // Atribuição de módulo (resto da divisão): x = x % 5 → 6 % 5 = 1 (x agora vale 1)
console.log(`Após x %= 5: ${x}`); // Imprime: Após x %= 5: 1

x **= 3;   // Atribuição de exponenciação: x = x ** 3 → 1 elevado a 3 = 1 (x mantém o valor 1)
console.log(`Após x **= 3: ${x}`); // Imprime: Após x **= 3: 1
