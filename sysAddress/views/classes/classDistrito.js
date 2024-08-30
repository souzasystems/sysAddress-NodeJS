class Distrito {
    constructor(idDistrito, idCidade, nomeDistrito, inativo) {
        this.idDistrito   = idDistrito;
        this.idCidade     = idCidade;
        this.nomeDistrito = nomeDistrito;
        this.inativo      = inativo;
    }

    // Getters
    getIdDistrito() {
        return this.idDistrito;
    }

    getIdCidade() {
        return this.idCidade;
    }

    getNomeDistrito() {
        return this.nomeDistrito;
    }

    getInativo() {
        return this.inativo;
    }

    // Setters
    setIdDistrito(idDistrito) {
        this.idDistrito = idDistrito;
    }

    setIdCidade(idCidade) {
        this.idCidade = idCidade;
    }

    setNomeDistrito(nomeDistrito) {
        this.nomeDistrito = nomeDistrito;
    }

    setInativo(inativo) {
        this.inativo = inativo;
    }
}
