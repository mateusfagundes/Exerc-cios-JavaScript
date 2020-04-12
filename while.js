function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
/*A função Math.random() retorna um número pseudo-aleatório
no intervalo [0, 1), ou seja, de 0 (inclusivo) até,
mas não incluindo, 1 (exclusivo), que depois você pode 
dimensionar para um intervalo desejado.
A implementação seleciona uma semente para o algoritmo
de geração de números aleatórios; esta semente não pode
ser escolhido ou reatribuída.*/
}
let opcao = 0
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`opção escolhida foi ${opcao}.`)
/*A declaração while cria um laço que executa uma rotina
especifica enquanto a condição de teste for avaliada
como verdadeira. A condição é avaliada antes da execução 
da rotina.*/
}

console.log('vlw flw!')