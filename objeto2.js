console.log(typeof Object) // Função
console.log(typeof new Object) // new Função que recebe um objeto

const Cliente = function (){} // Cria função
console.log(typeof Cliente) 
console.log(typeof new Cliente) // Estancia função

class Produto {} // versão ES 2015 (ES6) // cria classe 
console.log(typeof Produto) 
console.log(typeof new Produto()) // Estancia classe

