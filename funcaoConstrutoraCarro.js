function Carro(velocidadeMaxima = 200, delta = 5){
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const opala = new Carro
opala.acelerar()
console.log(opala.getVelocidadeAtual())

const caravan = new Carro(350, 20)
caravan.acelerar()
caravan.acelerar()
caravan.acelerar()
console.log(caravan.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof caravan)