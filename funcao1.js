// Função é um bloco de código nomeado, recebe parametros de entrada ou não (Variaveis) e retorna um valor.

// Ex: Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) // soma a + b
imprimirSoma(2) // NaN por não ter um segundo numero a somar
imprimirSoma(2, 3, 4, 5, 6, 7, 8) // soma os dois primeiros e Ignora o resto
imprimirSoma() // NaN por não ter numeros a somar

// Função com retorno
function soma(a = 0, b = 0) // 0 significa que por padrão a variavel a e b é 0
{
    return a + b
} 

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
