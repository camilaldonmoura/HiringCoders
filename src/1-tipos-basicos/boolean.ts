let estaAtivo: boolean;

//...
estaAtivo = true;

function mapearStatusUsuario(status: boolean) {
    if (status) {
        return 'Usuário está Ativo'
    } else {
        return 'Usuário não está Ativo'
    }
}

mapearStatusUsuario(false);
