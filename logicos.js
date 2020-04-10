function compras (trab1, trab2) {
    const comprarSorv = trab1 || trab2 // "OU" em javascript = "||"
    const comprarTv50 = trab1 && trab2 // "E" em javascript = "&&" 
    // const comprarTv32 = !! (trab1 ^ trab2) // bitwise xor
    const comprarTv32 = trab1 != trab2
    const manterSaudavel = !comprarSorv // operador unário

    return { comprarSorv, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))