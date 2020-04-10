// coleçao dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)
/*delete produto.preco
delete produto['marca do produto']
console.preco(produto)*/

const carro = {
    modelo: 'Opala',
    valor: 100000,
    proprietario: {
        nome: 'Mateus',
        idade: 22,
        endereco: {
            logradouro: 'Rua Ceilão', 
            numero: 87
        
        }
    },
    condutores: [{
    nome: 'Mateus',
    idade: 22
    }, {
    RG: 4567
    }],
    calcularValorSeguro: function() {
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)