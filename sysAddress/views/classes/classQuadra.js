class Quadra {
    constructor(idQuadra, idBairro, descricaoQuadra, complemento, inativa) {
        this.idQuadra        = idQuadra;
        this.idBairro        = idBairro;
        this.descricaoQuadra = descricaoQuadra;
        this.complemento     = complemento;
        this.inativa         = inativa;
    }

    // Getters
    getIdQuadra() {
        return this.idQuadra;
    }

    getIdBairro() {
        return this.idBairro;
    }

    getDescricaoQuadra() {
        return this.descricaoQuadra;
    }

    getComplemento() {
        return this.complemento;
    }

    getInativa() {
        return this.inativa;
    }

    // Setters
    setIdQuadra(idQuadra) {
        this.idQuadra = idQuadra;
    }

    setIdBairro(idBairro) {
        this.idBairro = idBairro;
    }

    setDescricaoQuadra(descricaoQuadra) {
        this.descricaoQuadra = descricaoQuadra;
    }

    setComplemento(complemento) {
        this.complemento = complemento;
    }

    setInativa(inativa) {
        this.inativa = inativa;
    }
}
