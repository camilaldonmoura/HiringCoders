class Usuario {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Player extends Usuario {
    game: string;
    constructor(name: string, age: number, game: string) {
        super(name, age);

        this.game = game;
    }
}

const jogador = new Player('Gabriel', 25, 'My Cafe');
console.log(jogador);