// Conselho fuja do escopo global

var numero = 1
{
    var numero = 2
    console.log('dentro do bloco{} =', numero)
}
console.log('fora do bloco{}=', numero)