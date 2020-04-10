let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo);

isAtivo = 1
console.log(!!isAtivo) // O simbolo de ! representa negação
console.log(!isAtivo) // Por tanto !! = true e ! = false
console.log(!true) // Exemplo de negação
console.log(!!true) // Exemplo de negação

// Situações que podemos forçar a interpretação verdadeira
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!! Infinity)
console.log(!!(isAtivo = true))

// Forçando situações falsas
console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar')
console.log(!!('' || null || 0 || ' ')) // Expreção lógica OU ||

let nome = ''
console.log(nome || 'Desconhecido') // Se inserir um nome vai imprimir o nome, se não vai imprimir Desconhecido.
