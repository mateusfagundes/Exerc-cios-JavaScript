const valores = [7.7, 8.9, 6.3, 9.2] // Array é escrita entre [couchetes]
console.log(valores[0], valores[3]) // Mostra os valores correspondente a suas posiçoes
console.log(valores[4]) // Como não tem nenhum valor no 4° espaço retorna (undefined)

valores[4] = 10 // Adicionando elementos num Array
console.log(valores) // Para mostrar todos os valores do array
console.log(valores.length) // Vai diser quantos elementos tem no Array

valores.push({id: 3}, false, null, 'teste') // O comando push mistura coisas ao Array (não recomandado por conta da desorganização) 
console.log(valores) // Para mostrar todos os valores do array

console.log(valores.pop()) // A função pop apaga todos elementos do array exceto o último
delete valores[0] // Deleta todos os valores que voce pré definir entre []
console.log(valores)

console.log(typeof valores) // Para buscar o tipo da função (array = objeto)