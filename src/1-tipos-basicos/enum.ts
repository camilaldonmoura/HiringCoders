enum Permissoes {
    admin,
    editor,
    comum
}


enum Cores {
    red = '#ff0000',
    black = '#000'
}
const usuario = {
    perfil: Cores.red,
    nivel: Permissoes.admin,
};

console.log(usuario)