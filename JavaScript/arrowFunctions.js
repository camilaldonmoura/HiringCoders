// é uma abstração de uma função

function soma(x, y) {
    return x + y;
}

const multiplicacao = function(x, y){
    return x * y;
};


// função de forma anonima - fica mais legivel você simplicar a função
const dividir = (x, y) => {
    return x / y;
};

//Contrução dinamica de objetos

const objeto = () => ({nome: 'Camila', sobrenome: 'Moura'});