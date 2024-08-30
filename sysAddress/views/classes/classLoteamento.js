class Loteamento {
    constructor(idLoteamento, idQuadra, descricaoLoteamento, inativo) {
        this.idLoteamento        = idLoteamento;
        this.idQuadra            = idQuadra;
        this.descricaoLoteamento = descricaoLoteamento;
        this.inativo             = inativo;
    }

    // Getters
    getIdLoteamento() {
        return this.idLoteamento;
    }

    getIdQuadra() {
        return this.idQuadra;
    }

    getDescricaoLoteamento() {
        return this.descricaoLoteamento;
    }

    getInativo() {
        return this.inativo;
    }

    // Setters
    setIdLoteamento(idLoteamento) {
        this.idLoteamento = idLoteamento;
    }

    setIdQuadra(idQuadra) {
        this.idQuadra = idQuadra;
    }

    setDescricaoLoteamento(descricaoLoteamento) {
        this.descricaoLoteamento = descricaoLoteamento;
    }

    setInativo(inativo) {
        this.inativo = inativo;
    }
}
