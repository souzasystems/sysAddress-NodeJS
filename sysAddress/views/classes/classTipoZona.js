class TipoZona {
    constructor(idTipoZona, descricaoTipoZona) {
        this.idTipoZona        = idTipoZona;
        this.descricaoTipoZona = descricaoTipoZona;
    }

    // Getters
    getIdTipoZona() {
        return this.idTipoZona;
    }

    getDescricaoTipoZona() {
        return this.descricaoTipoZona;
    }

    // Setters
    setIdTipoZona(idTipoZona) {
        this.idTipoZona = idTipoZona;
    }

    setDescricaoTipoZona(descricaoTipoZona) {
        this.descricaoTipoZona = descricaoTipoZona;
    }
}
