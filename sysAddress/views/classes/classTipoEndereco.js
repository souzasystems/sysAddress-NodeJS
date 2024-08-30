class TipoEndereco {
    constructor(idTipoEndereco, descricaoTipoEndereco) {
        this.idTipoEndereco        = idTipoEndereco;
        this.descricaoTipoEndereco = descricaoTipoEndereco;
    }

    // Getters
    getIdTipoEndereco() {
        return this.idTipoEndereco;
    }

    getDescricaoTipoEndereco() {
        return this.descricaoTipoEndereco;
    }

    // Setters
    setIdTipoEndereco(idTipoEndereco) {
        this.idTipoEndereco = idTipoEndereco;
    }

    setDescricaoTipoEndereco(descricaoTipoEndereco) {
        this.descricaoTipoEndereco = descricaoTipoEndereco;
    }
}
