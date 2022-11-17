//type alias
//ter controle sobre as chaves e os tipos dos objetos


type User = {
    name: string;
    lastName: string;
    birthday: string;
    age?: number;

}

const camila: User = {
    name: 'Camila',
    lastName: 'Moura',
    birthday: '09/02/1990'
}

// union types
// | (como se fosse o ||)
//vai ser de um tipo ou de outro

type LogLevel = 'info' | 'error' | 'debug';

function logMessage(message: string, level: LogLevel) {
    console.log(`[${level}] - ${message}`)
}

logMessage('Uma mensagem info', 'error')
logMessage('Uma mensagem info', 'info')
logMessage('Uma mensagem info', 'debug')


//intersections types = &
// agrupa os unin types

type About = {
    bio: string;
    interests: string[]
}

type Profile = User & About;
const userWithProfile: Profile = {
    name: 'Camila',
    lastName: 'Moura',
    birthday: '09/02/1990',
    bio: 'Olá, meu nome é Camila',
    interests: ['cachorros', 'livros', 'viajar']
}

