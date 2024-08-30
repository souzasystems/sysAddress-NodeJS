class Via {
    constructor(idVia, idLogradouro, idBairro, nomeVia, cep, inativa) {
        this.idVia        = idVia;
        this.idLogradouro = idLogradouro;
        this.idBairro     = idBairro;
        this.nomeVia      = nomeVia;
        this.cep          = cep;
        this.inativa      = inativa;
    }

    // Getters
    getIdVia() {
        return this.idVia;
    }

    getIdLogradouro() {
        return this.idLogradouro;
    }

    getIdBairro() {
        return this.idBairro;
    }

    getNomeVia() {
        return this.nomeVia;
    }

    getCep() {
        return this.cep;
    }

    getInativa() {
        return this.inativa;
    }

    // Setters
    setIdVia(idVia) {
        this.idVia = idVia;
    }

    setIdLogradouro(idLogradouro) {
        this.idLogradouro = idLogradouro;
    }

    setIdBairro(idBairro) {
        this.idBairro = idBairro;
    }

    setNomeVia(nomeVia) {
        this.nomeVia = nomeVia;
    }

    setCep(cep) {
        this.cep = cep;
    }

    setInativa(inativa) {
        this.inativa = inativa;
    }
}
