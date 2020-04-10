{
    {
        {
            {
                var sera = 'Será???' // Var é visivel para todos por ter escopo global
                console.log(sera)
            }
        }
    }
}
console.log(sera)

function teste() { // Function é visivel apenas em seu bloco {}
    var local = 123
    console.log(local)
}

teste()
// console.log(local) = erro, por estar fora do bloco!