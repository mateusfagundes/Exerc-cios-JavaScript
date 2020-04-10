// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- 456 -> {...}
//pessoa = { nome: 'Ana'}

Object.freeze(pessoa)

// Com o freeze não podemos mais alterar nada exemplo:
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa)
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({ nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)