// Inserindo novos elementos, nos espaços que estão faltando.


let lista = [1, 2, 5];
let listaIncluir = [3, 4];

console.log(lista);
console.log(listaIncluir);


// percorrer a lista Incluir e para cada elemento percorrer a lista principal
// splice para adcionar os numeros
for(let i = 0; i < listaIncluir.length; i++) {
    for(let j = 0; j < lista.length; j++) {
        if(lista[j] >= listaIncluir[i]) {
            lista.splice(j, 0, listaIncluir[i]);
            j++;

        }
    }
}

console.log(lista);

//spread, ele pega valores e se adapta onde vai ser aplicado
const listResult = [1, 2, ...listaIncluir, 5];

console.log(listResult);

let arr = ['a', 'b', 'c'];

let arr2 = [...arr];

arr2.push('d');

console.log(`Arr = ${arr}`);
console.log(`Arr2 = ${arr2}`);

