class Tipo {
    idTipo;
    descricao;

    constructor(idTipo, descricao) {
        this.idTipo = idTipo;
        this.descricao = descricao ?? '';
    }

    map() {
        return {
            idTipo: this.idTipo,
            descricao: this.descricao
        };
    }
}

module.exports = Tipo;
