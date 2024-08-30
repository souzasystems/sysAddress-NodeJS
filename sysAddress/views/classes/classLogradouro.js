class Logradouro {
    constructor(idLogradouro, descricaoLogradouro, abreviaturaLogradouro, inativo) {
        this.idLogradouro          = idLogradouro;
        this.descricaoLogradouro   = descricaoLogradouro;
        this.abreviaturaLogradouro = abreviaturaLogradouro;
        this.inativo               = inativo;
    }

    // Getters
    getIdLogradouro() {
        return this.idLogradouro;
    }

    getDescricaoLogradouro() {
        return this.descricaoLogradouro;
    }

    getAbreviaturaLogradouro() {
        return this.abreviaturaLogradouro;
    }

    getInativo() {
        return this.inativo;
    }

    // Setters
    setIdLogradouro(idLogradouro) {
        this.idLogradouro = idLogradouro;
    }

    setDescricaoLogradouro(descricaoLogradouro) {
        this.descricaoLogradouro = descricaoLogradouro;
    }

    setAbreviaturaLogradouro(abreviaturaLogradouro) {
        this.abreviaturaLogradouro = abreviaturaLogradouro;
    }

    setInativo(inativo) {
        this.inativo = inativo;
    }
}
