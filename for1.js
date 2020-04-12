let contador = 1 // declaração da variável
while(contador <= 10) // Expreção da variavel do tipo while
    { 
    console.log(`contador = ${contador}`)
    contador++ // acrescenta +1 ao contador até chegar a 10, a condicao se torna falsa e ele para de contar.
}

for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
/*A instrução for cria um loop que consiste em três 
expressões opcionais, dentro de parênteses e separadas 
por ponto e vírgula, seguidas por uma declaração ou uma 
sequência de declarações executadas em sequência.*/
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas}`)
}
