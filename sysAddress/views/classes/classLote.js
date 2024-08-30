class Lote {
    constructor(idLote, idLoteamento, descricaoLote, complemento, inativo) {
        this.idLote        = idLote;
        this.idLoteamento  = idLoteamento;
        this.descricaoLote = descricaoLote;
        this.complemento   = complemento;
        this.inativo       = inativo;
    }

    // Getters
    getIdLote() {
        return this.idLote;
    }

    getIdLoteamento() {
        return this.idLoteamento;
    }

    getDescricaoLote() {
        return this.descricaoLote;
    }

    getComplemento() {
        return this.complemento;
    }

    getInativo() {
        return this.inativo;
    }

    // Setters
    setIdLote(idLote) {
        this.idLote = idLote;
    }

    setIdLoteamento(idLoteamento) {
        this.idLoteamento = idLoteamento;
    }

    setDescricaoLote(descricaoLote) {
        this.descricaoLote = descricaoLote;
    }

    setComplemento(complemento) {
        this.complemento = complemento;
    }

    setInativo(inativo) {
        this.inativo = inativo;
    }
}
