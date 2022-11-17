//VOID
//Atribuido a funções que não tem retorno
//Ou quando quer executar alguma coisa e dizer que não tem retorno


function principal(): void {
    console.log('executando')
}

principal()

//NEVER
//ela nunca vai retornar
//laços de repetições infinitos
//ou funções que disparam erros


function funcaoQueNuncaRetorna(): never {
    throw new Error('olá')

}

const a = funcaoQueNuncaRetorna()