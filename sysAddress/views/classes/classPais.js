class Pais {
    constructor(idPais, nomePais, sigla02, sigla03, codigoIso3166, numeroDdi, inativo) {
        this.idPais        = idPais;
        this.nomePais      = nomePais;
        this.sigla02       = sigla02;
        this.sigla03       = sigla03;
        this.codigoIso3166 = codigoIso3166;
        this.numeroDdi     = numeroDdi;
        this.inativo       = inativo;
    }

    // Getters
    getIdPais() {
        return this.idPais;
    }

    getNomePais() {
        return this.nomePais;
    }

    getSigla02() {
        return this.sigla02;
    }

    getSigla03() {
        return this.sigla03;
    }

    getCodigoIso3166() {
        return this.codigoIso3166;
    }

    getNumeroDdi() {
        return this.numeroDdi;
    }

    getInativo() {
        return this.inativo;
    }

    // Setters
    setIdPais(idPais) {
        this.idPais = idPais;
    }

    setNomePais(nomePais) {
        this.nomePais = nomePais;
    }

    setSigla02(sigla02) {
        this.sigla02 = sigla02;
    }

    setSigla03(sigla03) {
        this.sigla03 = sigla03;
    }

    setCodigoIso3166(codigoIso3166) {
        this.codigoIso3166 = codigoIso3166;
    }

    setNumeroDdi(numeroDdi) {
        this.numeroDdi = numeroDdi;
    }

    setInativo(inativo) {
        this.inativo = inativo;
    }
}
