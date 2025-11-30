class Tipo {
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

export default Tipo;
