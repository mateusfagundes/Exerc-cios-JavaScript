const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2) // constante para calcular a média

console.log(media.toFixed(2)) // toFixed(2) reduz as casas decimais para 2 digitos depois do ponto
console.log(media.toString(2)) // toString(2) converte flutuante em binário
console.log(typeof media) // typeof mostra o tipo da váriavel ou constante
console.log(typeof Number) // typeof mostra o tipo da váriavel ou constante