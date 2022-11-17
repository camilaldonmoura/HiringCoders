// Se precisar quebrar informações na forma 'tradicional'

const pessoa = {
    nome: 'Camila',
    sobrenome: 'Moura',
    idade: 32,
    profissao: 'QA'
};

console.log(pessoa);

//let nome = pessoa.nome;
//let sobrenome = pessoa.sobrenome;
//let idade = pessoa.idade;
//let profissao = pessoa.profissao;

// quebrar informações de forma mais 'limpa' com desestruct

let { nome, sobrenome, idade, profissao } = pessoa;
console.log(nome, idade, profissao);
