class Cidade {
    constructor(idCidade, idEstado, nomeCidade, codigoIbge, numeroDdd, inativa) {
        this.idCidade   = idCidade;
        this.idEstado   = idEstado;
        this.nomeCidade = nomeCidade;
        this.codigoIbge = codigoIbge;
        this.numeroDdd  = numeroDdd;
        this.inativa    = inativa;
    }

    // Getters
    getIdCidade() {
        return this.idCidade;
    }

    getIdEstado() {
        return this.idEstado;
    }

    getNomeCidade() {
        return this.nomeCidade;
    }

    getCodigoIbge() {
        return this.codigoIbge;
    }

    getNumeroDdd() {
        return this.numeroDdd;
    }

    getInativa() {
        return this.inativa;
    }

    // Setters
    setIdCidade(idCidade) {
        this.idCidade = idCidade;
    }

    setIdEstado(idEstado) {
        this.idEstado = idEstado;
    }

    setNomeCidade(nomeCidade) {
        this.nomeCidade = nomeCidade;
    }

    setCodigoIbge(codigoIbge) {
        this.codigoIbge = codigoIbge;
    }

    setNumeroDdd(numeroDdd) {
        this.numeroDdd = numeroDdd;
    }

    setInativa(inativa) {
        this.inativa = inativa;
    }
}
