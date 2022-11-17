//Numeros e Operadores

var nome = "JC";
var sobrenome = "Bombardeli";

var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);




// condicionais

var nome = "Bombardeli";

if (nome === "JC"){
    console.log("Legal seu nome é esse mesmo");
} else if (nome === "Bombardeli") {
    console.log("Tudo Bem, você também serve.");
} else {
    console.log("Que Pena, seu nome não é esse.");
}

var nome = "Jolie";

switch (nome) {
    case "Camila":
    console.log("Legal! É você mesmo.");
        break;
    case "Luiza":
        console.log("Ah, você também serve!");
    default:
        console.log("Que Pena, não é você que estou procurando.")
        break;
}

// Estruturas de Repetição

var numeroSorteado = 10;
//var tabuada = 7;

//for (var i = 0; i < 100; i++ ) {
//    console.log("Valor de " + tabuada + "x" + i + '=' + tabuada * i);
//}

for(var i = 0; i < 100; i++) {
    if(numeroSorteado === i) {
        console.log("Seu numero foi encontrado");
        break;
    }
}
