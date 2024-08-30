class EstadoCivil {
    constructor(idEstadoCivil, descricaoEstadoCivil) {
        this.idEstadoCivil        = idEstadoCivil;
        this.descricaoEstadoCivil = descricaoEstadoCivil;
    }

    // Getters
    getIdEstadoCivil() {
        return this.idEstadoCivil;
    }

    getDescricaoEstadoCivil() {
        return this.descricaoEstadoCivil;
    }

    // Setters
    setIdEstadoCivil(idEstadoCivil) {
        this.idEstadoCivil = idEstadoCivil;
    }

    setDescricaoEstadoCivil(descricaoEstadoCivil) {
        this.descricaoEstadoCivil = descricaoEstadoCivil;
    }
}
