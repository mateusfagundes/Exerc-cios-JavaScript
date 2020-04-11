const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //Gerou um conflito entre paradigmas: funcionar e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() //.bind é responsavel por amarrar um objeto e tomar a frante da execução