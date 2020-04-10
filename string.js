const escola = "cod3r" 

console.log(escola.charAt(4)) // Localiza cada caractere da palavra seguindo um parametro (4)
console.log(escola.charAt(2)) // Localiza cada caractere da palavra seguindo um parametro (2)
console.log(escola.charCodeAt(3)) // Valor da tabela unicode 3 = 51
console.log(escola.indexOf('3')) // Pega o valor associado ao codigo = 3

console.log(escola.substring (1)) // Mostra a sequencia do 1 até o final da palavra
console.log(escola.substring(0, 3)) // Mostra a sequencia do 0 até 3 caractere

//Concatenação
console.log('Escola '.concat(escola).concat("!")) // Insere algum caractere Ex: !
console.log('Escola ' + escola + "!") // Insere algum caractere Ex: !
console.log('3' + 2) // O + Concatena 3 ao 2 = 32
console.log(escola.replace(3, 'e')) // Substitui todos dos digitos, no caso 3 pela letra e
console.log(escola.replace(/\w/g, 'e')) // Substitui todos dos digitos pela letra e

//Array
console.log('Ana, Maria, Pedro'.split(',')) // Gera um Array separados por ',' 
console.log('Ana, Maria, Pedro'.split(/,/)) // Gera um Array separados por ','
