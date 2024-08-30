class Estado {
    constructor(idEstado, idPais, nomeEstado, siglaEstado, codigoIbge, inativo) {
        this.idEstado    = idEstado;
        this.idPais      = idPais;
        this.nomeEstado  = nomeEstado;
        this.siglaEstado = siglaEstado;
        this.codigoIbge  = codigoIbge;
        this.inativo     = inativo;
    }

    // Getters
    getIdEstado() {
        return this.idEstado;
    }

    getIdPais() {
        return this.idPais;
    }

    getNomeEstado() {
        return this.nomeEstado;
    }

    getSiglaEstado() {
        return this.siglaEstado;
    }

    getCodigoIbge() {
        return this.codigoIbge;
    }

    getInativo() {
        return this.inativo;
    }

    // Setters
    setIdEstado(idEstado) {
        this.idEstado = idEstado;
    }

    setIdPais(idPais) {
        this.idPais = idPais;
    }

    setNomeEstado(nomeEstado) {
        this.nomeEstado = nomeEstado;
    }

    setSiglaEstado(siglaEstado) {
        this.siglaEstado = siglaEstado;
    }

    setCodigoIbge(codigoIbge) {
        this.codigoIbge = codigoIbge;
    }

    setInativo(inativo) {
        this.inativo = inativo;
    }
}
