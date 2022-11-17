// sem ternário

let isValid = true;

function verify(){
    if(isValid) {
        return true
    }
    else {
        return false
    }
}

console.log(verify(isValid));

// com ternário - se eu tenho uma estrura que só resulta em verdadeiro ou falso
// eu posso substituir o if e else por um ternário.

const result = isValid ? true : false;

let zero = 0;

const numeroResultado = zero > 0 ? 0 : -1;

console.log(numeroResultado);