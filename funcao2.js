// Armazenando uma função dentro de uma variável
const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armezenando uma função arrow em uma variável
const soma = (a, b) => // => maior ou igual, essa seta substitui a function
{
    return a + b
} 

console.log(soma(2, 3))

// Retorno Implícito (EloFunction)
const subtracao = (a, b) => a - b // (a, b) são os parámetros, => é a função e a, b é o retorno da função
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')