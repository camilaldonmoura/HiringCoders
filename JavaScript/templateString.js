//o que é? Uma forma de escrever strings com um modelo que vai ser
// interpolado com o que você está escrevendo. 

let meuNome = 'Camila';
let meuSobrenome = 'Moura';
let minhaProfissao = 'QA';

console.log(`Olá meu nome é ${meuNome} ${meuSobrenome} e minha profissão é ${minhaProfissao}`);

//Da para executar operações dentro dele
console.log(`O resultado da soma de 1+1 = ${1+1}`);

//Também é possivel fazer isso para objetos
console.log(`O objeto Json ${{chave: 'valor'}}`);

let meuObjeto = {
    chave: 'novo valor'
}