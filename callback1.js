const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
// Essa função sera chamada quando um evento acontecer
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))
// Callback é como se fosse Trigger no BD