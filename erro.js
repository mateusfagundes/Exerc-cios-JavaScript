function tratarErroELancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.mensagem,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try{
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroELancar(e)
    } finally { //Sempre será executada mesmo sem haver erro
        console.log('final')
    }
}

const obj = { nome: 'Roberto'} // Correto: name
imprimirNomeGritado(obj)