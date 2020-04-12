const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) { //A função Math.floor(x) retorna o menor número inteiro dentre o número "x", ou seja arredonda a "nota".
        case 10:               // case = "caso" o valor seja = a 10 entrará no ('Quadro de honra'). 
        case 9:               // Mesmo esquema rsrs.
            console.log('Quadro de honra')
            break           // para a execução, sem ele ia executar todas as opções a baixo. 
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default: // default serve para mostrar uma mensagem caso nenhuma das opções a cima seja executada.
        console.log('Nota inválida')
    }
    console.log('Fim da execucução')
}

imprimirResultado (10)
imprimirResultado (8.9)
imprimirResultado (6.55)
imprimirResultado (2.3)
imprimirResultado (-1)
imprimirResultado (11)