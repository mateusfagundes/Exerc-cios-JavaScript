// Par nome/valor
const saudacao = 'Eae' // Contexto léxico 1 = (o local fisico onde sua variavel foi definida)

function exec() {
    const saudacao = 'Fala mano' // Contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 22,
    peso: 99,
    endereco: {
        logradouro: 'Rua',
        numero: 11,
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)