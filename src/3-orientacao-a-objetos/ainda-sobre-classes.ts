// public: acessivel de forma geral, dentro e fora da classe
//private: acessivel apenas dentro da classe onde o campo foi criado
//protected: acessivel apenas dentro da classe(e subclasses) onde o campo foi criado


class Usuarios {
    public nome;
    public idade;
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

}

class Playeres extends Usuarios {
    public jogo;
    
    constructor(nome: string, idade: number, jogo: string) {
        super(nome, idade);
        this.jogo = jogo;
    }

    dizerOJogoAtual(){
        return `Estou Jogando, no momento: ${this.jogo}`;
    }

    static queHorasSao() {
        return Date();
    }
}

const jogadores = new Playeres('Ana', 25, 'Red Dead Redemption 2');
console.log(jogadores.dizerOJogoAtual())
console.log(Playeres.queHorasSao())

class Jogo {
    private identificacao;

    constructor(identificacao: string) {
        this.identificacao = identificacao;
    }
    
    dizerNome(){
        return `O nome do jogo é: ${this.identificacao}`;
    }
}

class JogoComDescricao extends Jogo {
    private descricao;

    constructor(identificacao: string, descricao: string){
        super(identificacao);

        this.descricao = descricao;
    }
}

const ghost = new Jogo('Ghost of Tsuhima');
console.log(ghost.dizerNome);